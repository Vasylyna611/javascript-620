//--------Task 1---------

function calcRectangleArea(width, height) {
	if (isNaN (width) || isNaN (height)) {
		throw new Error('It is not a number')
	}
	return width * height
}
let width = prompt('Enter width of rectangle')
let height = prompt('Enter height of rectangle')
try {
	console.log('Area ' + calcRectangleArea(width, height))
} catch(exception) {
	console.log(exception)
}

//--------Task 2----------

function checkAge() {
	let age = prompt('Enter your age')
	if (age.length == 0) {
		throw new Error('The field is empty! Please enter your age')
	}
	else if (isNaN (age)) {
		throw new Error('Incorect data')
	}
	else if (age <= 14) {
		throw new Error('You are not adult')
	}
	else {
		return age
	}
}
try {
	let result = checkAge()
	console.log(result)
} catch (exception) {
	console.log(exception)
}

//------Task 4---------

function showUser(id) {
	if (id < 0 ) {
		throw new Error('ID must not be negative')
	} else {
		let user = new Object()
		user.id = id
		return user
	}
}

function showUsers(ids) {
	let users = []
	for(let i = 0; i < ids.length; i++) {
		try {
			users.push(showUser(ids[i]))
		} catch(exception) {
			console.log('Error: ' + exception.message)
		}
	}
	return users
}
