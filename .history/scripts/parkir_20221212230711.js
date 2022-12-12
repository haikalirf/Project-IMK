function clearAll() {
	const meme = document.querySelector('.meme-content');
	const joke = document.querySelector('.joke-content');
	const quote = document.querySelector('.quote-content');
	const riddle = document.querySelector('.riddle-content');

	meme.innerHTML = '';
	joke.innerHTML = '';
	quote.innerHTML = '';
	riddle.innerHTML = '';
}

function border(el) {
    el.style.border = "1px solid blue";
}