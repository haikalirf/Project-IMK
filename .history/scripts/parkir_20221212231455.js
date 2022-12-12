function border(image) {
	const allImage = document.querySelector('.gambar-parkir');
	allImage.forEach(e => {
		e.style.border = "";
	});
	image.style.border = "8px solid #3B6A94";
}