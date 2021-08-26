let p = document.querySelector('#size')

window.addEventListener('resize', function() {
	p.textContent = `Width: ${window.innerWidth}, Height: ${window.innerHeight}`
})