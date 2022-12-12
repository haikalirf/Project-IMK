function border(image) {
	const allImage = document.querySelectorAll('.gambar-parkir');
	allImage.forEach(e => {
		e.style.border = "";
	});
	image.style.border = "8px #3B6A94";
}