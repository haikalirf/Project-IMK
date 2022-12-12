function border(image) {
	const allImage = document.querySelectorAll('.gambar-parkir');
	allImage.forEach(e => {
		e.style.outline = "";
	});
	image.style.outline = "8px solid #3B6A94";
}

function check(checkbox) {
	const allCheckbox = document.querySelectorAll('.check-roda');
	allCheckbox.forEach(e => {
		e.style.outline = "";
	});
	image.style.outline = "8px solid #3B6A94";
}