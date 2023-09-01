document.addEventListener('DOMContentLoaded', () => {
	const footer = document.querySelector('.footer');
	const time = footer.querySelector('.footer__time');
	const author = footer.querySelector('.footer__author')

	const currentYear = String((new Date()).getFullYear());
	time.setAttribute('datetime', currentYear);
	author.innerHTML = author.innerHTML.replace('%YEAR%', currentYear)
})
