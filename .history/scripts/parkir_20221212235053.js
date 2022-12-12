function border(image) {
	
	if (image.getAttribute("style.outline")==null || image.getAttribute("style.outline")=="") {
		
	}
	const allImage = document.querySelectorAll('.gambar-parkir');
	allImage.forEach(e => {
		e.style.outline = "";
	});
	image.style.outline = "8px solid #3B6A94";
}