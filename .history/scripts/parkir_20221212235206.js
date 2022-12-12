function border(image) {
	var hasOutline = true
	if (image.getAttribute("style.outline")==null || image.getAttribute("style.outline")=="") {
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