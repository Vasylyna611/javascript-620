let msgDiv = document.querySelector("#messages")

function pressButton() {
	let p = document.createElement('p')
	p.textContent = 'I was pressed!'
	msgDiv.appendChild(p)
}

function mouseOver() {
	let p = document.createElement('p')
	p.textContent = 'Mouse on me!'
	msgDiv.appendChild(p)
}

function mouseOut() {
	let p = document.createElement('p')
	p.textContent = 'Mouse is not on me!'
	msgDiv.appendChild(p)
}