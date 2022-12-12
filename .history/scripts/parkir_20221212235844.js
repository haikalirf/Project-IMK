function border(image) {
	var hasOutline = false
	if (image.hasAttribute("style.outline") === null) {
		hasOutline = false
	}
	const allImage = document.querySelectorAll('.gambar-parkir');
	allImage.forEach(e => {
		e.style.outline = "";
	});
	if (!hasOutline) {
		image.style.outline = "8px solid #3B6A94";
	}
}