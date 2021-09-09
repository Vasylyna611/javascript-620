function greetings(date, username) {
	let dateTime = date.getHours()
if (dateTime >= 17 && dateTime < 23) {
	message = "Good morning, "
} else if (dateTime >= 5 && dateTime < 11) {
	message = "Good morning, " 
} else if (dateTime >= 11 && dateTime < 17) {
	message = "Good day, "
} else {
	message = "Good evening, "
}
return message + username
}
module.exports = {greetings}