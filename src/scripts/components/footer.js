document.addEventListener('DOMContentLoaded', () => {
	const time = document.querySelector('.footer__time');
	const author = document.querySelector('.footer__author');

	const currentYear = String(new Date().getFullYear());
	time.setAttribute('datetime', currentYear);
	author.innerHTML = author.innerHTML.replace('%YEAR%', currentYear);

	// To top link
	document.getElementById('toTop').addEventListener('click', (event) => {
		event.preventDefault();
		document.documentElement.scrollIntoView({ behavior: 'smooth' });
	});
});
