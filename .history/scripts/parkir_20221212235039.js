function border(image) {
	if (image.getAttribute("style")==null || image.getAttribute("style")=="") {
		
	}
	const allImage = document.querySelectorAll('.gambar-parkir');
	allImage.forEach(e => {
		e.style.outline = "";
	});
	image.style.outline = "8px solid #3B6A94";
}