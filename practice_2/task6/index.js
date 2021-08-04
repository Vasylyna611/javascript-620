let a = +prompt("Введіть довжину для однієї сторони трикутника")
let b = +prompt("Введіть довжину для другої сторони трикутника")
let c = +prompt("Введіть довжину для третьої сторони трикутника")
if (( a > 0) && (b > 0) && (c > 0) && (( a + b > c) && (b + c > a) && (a + c > b))) {
	let p = (a + b + c) / 2
	console.log(p.toFixed(3))
	let s = Math.sqrt(p * (p - a) * (p - b) * (p - c))
	if ((a * a + b * b == c * c) || (a * a + c * c == b * b) || (b * b + c * c == a * a)) {
		console.log("Трикутник є прямокутним")
	} else {
		console.log("Трикутник не прямокутний")
	}
} else {
	console.log("Incorrect data")
}
