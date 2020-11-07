// Enter your JavaScript for the solution here...

const input = document.querySelector('input');

input.addEventListener('input', updateFilter);

let resetButton = document.querySelector('.reset');

resetButton.addEventListener('click', resetGallery);

function resetGallery(e) {
	document.querySelectorAll('.thumb-display').forEach(function(thumbDisplay, index) {
		thumbDisplay.classList.remove('hidden');
	})
		resetButton.classList.add('hidden');
		input.value = "";
}

function updateFilter(e) {
	const filterText = e.target.value;
	console.log(filterText);

	if (filterText.length > 0) {
		resetButton.classList.remove('hidden');
	} else {
		resetButton.classList.add('hidden');
	}

	let elementThumbnails = document.querySelectorAll(".thumb-display");
	// console.log(elementThumbnails);
	elementThumbnails.forEach(function(element, index) {
		
		let tags = element.querySelector(".tags").innerText
		console.log(tags.innerText);

		if (tags.includes(filterText)) {
			element.classList.remove('hidden')
		} else {
			element.classList.add('hidden')
		}

	})
}


