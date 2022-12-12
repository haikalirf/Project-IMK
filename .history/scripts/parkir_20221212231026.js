function clearAll() {
	const image = document.querySelector('.gambar-parkir');

	image.innerHTML = '';
}

function border(image) {
	const image = document.querySelector('.gambar-parkir');
	image.innerHTML = '';
	image.style.border = "8px solid #3B6A94";
}