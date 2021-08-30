
//-------Task 1--------

function upperCase(str) {
	let reg = /[A-Z]/g;
	if (reg.exec(str) == null) {
		return 'String is not start with uppercase character' 
	} else {
		return 'String starts with uppercase character'
	}
}

//-------Task 2--------

function validateEmail(str) {
	let reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
	if (reg.exec(str) !== null) {
		return true
	} else {
		return false
	}
}

//--------Task 4---------

str = 'Java Script'
str = str.replace(/Java/, 'Script,')
str.replace(/Script$/, 'Java')

//--------Task 5---------

function validateCardNumber(cardnumber) {
	let match = /^\d{4}-\d{4}-\d{4}-\d{4}$/g
    if (match.exec(cardnumber) !== null) {
  		return 'Card number is valid'
  	} else {
    	return 'Invalid card number'
 	}
}

//--------Task 6---------

function checkEmail(str) {
	let reg = /^[a-zA-Z\d][\w]+@([\w-]+\.)+[\w-]{2,4}$/g
	if (reg.exec(str) !== null) {
  		return 'Email is correct!'
  	} else {
    	return 'Email is not correct!'
 	}
}

//--------Task 7---------

function checkLogin(login) {
	let reg = /^[a-zA-Z][a-zA-Z(\d\.\d)]{1,9}$/g
	let numbers = /(\d|\d\.\d)/g
	console.log(login.match(numbers).join(', '))
	if (reg.exec(login) != null) {
		return true 
	} else {
		return false
	}
}