//-------Task 1-------
let arr = [2,3,4,5];
let dob = 1;
for(let i=0; i < arr.length; i++) {
	dob *= arr[i]	
}

console.log(dob)


dob = 1
let i = 0;
while (i < arr.length) {
	dob *= arr[i]
	i++
}
console.log(dob)

//------Task 2--------
let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
for(let i=0; i < arr.length; i++) {
	if (arr[i] %  2 == 0) {
		console.log(arr[i] + ' is odd')
	} else {
		console.log(arr[i] + ' is even')
	} 
}

//------Task 3---------
function randArray(k) {
	let arr = [];
	for(let i=0; i < k; i++) {
		arr[i] = Math.floor(Math.random() * 500) + 1;
	}
	return arr
}
randArray(5)

//--------Task 4--------
function raiseToDegree(a,b) {
	let num = a
	let i = 1
	while(i < b) {
		num *= a
		i++
	}
	return num
} 

let a = prompt("Введіть ціле число:");
let b = prompt("Введіть до якого степеня піднести число:");
raiseToDegree(a,b)

//------Task 5-----------
function findMin() {
let min = arguments[0];
for(let i=0; i < arguments.length; i++) {
	if (min > arguments[i])
		min = arguments[i]
    }
    return min
}
findMin(12, 14, 4, -4, 0.2)

//--------Task 6-----------
function findUnique(arr) {
	let isUnique = true;
	for(let i=0; i < arr.length; i++) {
		for(let j=0; j < arr.length; j++) {
    		if (arr[i] == arr[j] && i != j) {
    			isUnique = false
    			break
    		}
		}
    	if (!isUnique) {
    		break
    	}
	}
	return isUnique	
}

findUnique([1, 2, 3, 5, 3])
findUnique([1, 2, 3, 5, 11])

//------Task 7--------
function lastElem(arr, x) { 
  let length = arr.length - 1 
  if (x === undefined || x == 0 || x == 1) { 
    return arr[length] 
  } else { 
    let latest = [] 
    for(let i = length; i > length - x; i--) { 
      latest.unshift(arr[i]) 
      if (i == 0) { 
        break 
      } 
    } 
    return latest 
  } 
}


//------Task 8-------
function firstLetter(str) {
  arr = str.split(' ')
  for(let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
  }
  return arr.join(' ')
}
