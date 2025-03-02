document.addEventListener('DOMContentLoaded', () => {
	const burgerMenu = document.querySelector('.burger-menu');
	const burgerMenuParts = burgerMenu.querySelectorAll('.burger-menu__part');
	const menu = document.querySelector('.header__menu');
	const burgerMenuLinks = document.querySelectorAll('.header__menu-link');

	let isMenuOpen = false;

	burgerMenu.addEventListener('click', () => {
		isMenuOpen = !isMenuOpen;

		burgerMenuParts.forEach((part) => {
			part.classList.toggle('burger-menu__part_open');
		});
		menu.classList.toggle('header__menu_show');
	});

	// Scroll to section & close burger
	burgerMenuLinks.forEach((link) => {
		link.addEventListener('click', (event) => {
			event.preventDefault();

			const section = document.querySelector(link.getAttribute('href'));

			if (section) {
				section.scrollIntoView({ behavior: 'smooth' });
			}

			if (isMenuOpen) {
				burgerMenuParts.forEach((part) => {
					part.classList.remove('burger-menu__part_open');
				});
				menu.classList.remove('header__menu_show');

				isMenuOpen = false;
			}
		});
	});
});
