let countriesSelect = document.querySelector('#country')
let citiesSelect = document.querySelector('#city')
let USAcities = ['New York', 'Chicago', 'Boston', 'Washington'];
let UkraineCities = ['Lviv', 'Kyiv', 'Odesa', 'Kharkiv'];
let GermanyCities = ['Berlin', 'Hamburg', 'Leipzig', 'Keln'];
let p = document.querySelector('#place')


citiesSelect.addEventListener('change', function(opt) {
	let selectedCountry = countriesSelect.options[countriesSelect.selectedIndex].text; 
	let selectedCity = citiesSelect.options[citiesSelect.selectedIndex].text;
	p.textContent = `${selectedCountry}, ${selectedCity}`
})

countriesSelect.addEventListener('change', function(opt) {
	let options = opt.target.options;
	switch(options.selectedIndex) {
		case 1:
			arrayToOptions(GermanyCities)
			break;
		case 2:
			arrayToOptions(UkraineCities)
			break;
		default:
			arrayToOptions(USAcities)
			break;

	}
});



function arrayToOptions(array) {
	citiesSelect.innerText = null
	for(let i = 0; i < array.length; i++) {
	    let el = document.createElement("option");
	    el.textContent = array[i];
	    el.value = array[i];
	    citiesSelect.appendChild(el);
	}
}