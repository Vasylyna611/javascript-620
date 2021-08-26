function removeOption() {
	let nameSelect = document.querySelector("#nameSelect");
    let selectedIndex = nameSelect.options.selectedIndex; 
    nameSelect.options[selectedIndex] = null;
}