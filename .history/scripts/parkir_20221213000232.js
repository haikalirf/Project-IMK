function border(image) {
	var hasOutline = true
	console.log(image.style.outline)
	if (image.style.outline === null) {
		console.log("stuff")
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