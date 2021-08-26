
document.addEventListener("DOMContentLoaded", windowTest());

async function windowTest() {
	let newWindow = window.open(this.href, 'targetWindow', `width=300, height=300`)
	await sleep(2000)
	newWindow.resizeTo(500, 500)
	await sleep(2000)
	newWindow.moveTo(200, 200)
	await sleep(2000)
	newWindow.close()
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}