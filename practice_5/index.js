//------Task 1-----------

function propsCount(obj) {
    return Object.keys(obj).length
}

let mentor = { 
            course: "JS fundamental", 
            duration: 3,
            direction: "web-development" 
        };
propsCount(mentor) //3

//-------Task 2-----------

function showProps(obj) {
    console.log(Object.keys(obj))
    console.log(Object.values(obj))
}

let obj = {
	    name: 'Vasylyna',
	    surname: 'Kuzyshyn',
	    age: 28,
	    course: 'JS fundamental',
        direction: 'web-development'
    }
showProps(obj)

//--------Task 3--------------

class Person {
	constructor(name, surname) {
		this.name = name
		this.surname = surname
	}

	fullName(arr) {
		return arr.join(' ')
	}

	showFullName() {
		return this.fullName([this.name, this.surname])
	}
}

class Student extends Person {
	constructor(name, surname, year) {
		super(name, surname)	
		this.year = year
	}

	showFullName(middleName) {
		return this.fullName([this.name, middleName, this.surname])
	}

	showCourse() {
		let course = new Date().getFullYear() - this.year
		return course
	}
}

let stud1 = new Student("Petro", "Petrenko", 2015);
console.log(stud1.showFullName("Petrovych"));
console.log("Current course: " + stud1.showCourse()); 

//-----------Task 4-----------

class Worker {
	#experience
	constructor(fullName, dayRate, workingDays) {
		this.fullName = fullName
		this.dayRate = dayRate
		this.workingDays = workingDays
		this.#experience = 1.2
	}

	showSalary() {
		console.log(this.fullName + ' salary: ' + this.salary())
    }

    salary() {
    	let salary = this.dayRate * this.workingDays
		return salary
    }

    salaryWithExperience() {
    	return this.salary() * this.#experience
    }

	showSalaryWithExperience() {
   		console.log(this.fullName + ' salary: ' + this.salaryWithExperience())
    }

    get showExp() {
    	return this.#experience
    }

    get showFullName() {
    	return this.fullName
    }

    set setExp(value) {
    	this.#experience = value
    }
}

let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);                 
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();

let worker2 = new Worker("Tom Tomson", 48, 22);
console.log(worker2.fullName);                 
worker2.showSalary();
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();
worker2.setExp = 1.5;
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();

let worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName);                 
worker3.showSalary();
console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience();
worker3.setExp = 1.5;
console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience();

let workers = [worker1, worker2, worker3]

for(let i = 0; i < workers.length; i++) {
	for(let j = 0; j < workers.length - i - 1; j++ ) {
		if (workers[j+1].salaryWithExperience() < workers[j].salaryWithExperience()) {
			[workers[j + 1],workers[j]] = [workers[j],workers[j + 1]]
		}
	}
}

console.log('Sorted salary:')
for(i = 0; i < workers.length; i++) {
	console.log(workers[i].showFullName + ': ' + workers[i].salaryWithExperience())
}

//---------Task 5----------

class GeometricFigure {
	getArea() {
		return 0;
	}

	toString() {
		return Object.getPrototypeOf(this).constructor.name;
	}
}

class Triangle extends GeometricFigure {
	constructor(side, height) {
		super()
		this.side = side
		this.height = height
	}

	getArea() {
		return (this.side * this.height) / 2
	}
} //var s = (side1 + side2 + side3) / 2;
//var area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));

class Square extends GeometricFigure {
	constructor(side) {
		super()
		this.side = side
	}

	getArea() {
		return this.side * this.side
	}
	//side*side
}

class Circle extends GeometricFigure {
	constructor(radius) {
		super()
		this.radius = radius //var area = (myRadius * myRadius * Math.PI);
	}

	getArea() {
		return this.radius * this.radius * Math.PI
	}
}

let figures = [new Triangle(4, 5), new Square(7), new Circle(5)];

function handleFigures(figures) {
	for(let i = 0; i < figures.length; i++) {
		let parentName = Object.getPrototypeOf(figures[i].constructor).name
		if (parentName == 'GeometricFigure') {
			console.log(parentName + ': ' + figures[i].toString() + ' - area:' + figures[i].getArea())
		}
	}
	let total = figures.reduce(function(sum, current) {
		return sum + current.getArea()
	}, 0)
	console.log(total)
}







//---------Homework 4 Task 3----------
const monthNames = ["January", "February", "March",  "April", "May", "June",  "July", "August", "September", "October", "November", "December"];

class MonthException {
	constructor(message) {
		this.message = message
		this.name = 'MonthException'
	}

	showMonthName(month) {
		if (month > 12 || month < 0) {
			throw new Error('Incorrect month number')
		} else {
			return monthNames[month - 1]
		}
	}
}
try {
	let calendar = new MonthException('message')
	console.log(calendar.showMonthName(5))
	console.log(calendar.showMonthName(51))
} catch(err) {
	console.log(err.message)
}

