document.addEventListener('DOMContentLoaded', () => {
	const burgerMenu = document.querySelector('.burger-menu');
	const burgerMenuParts = burgerMenu.querySelectorAll('.burger-menu__part');
	const menu = document.querySelector('.header__menu');
	const burgerMenuLinks = document.querySelectorAll('.header__menu-link');

	let isMenuOpen = false;

	burgerMenu.addEventListener('click', () => {
		isMenuOpen = !isMenuOpen;

		burgerMenuParts.forEach(part => {
			part.classList.toggle('burger-menu__part_open')
		})
		menu.classList.toggle('header__menu_show');
	})

	burgerMenuLinks.forEach(link => {
		link.addEventListener('click', () => {
			if (isMenuOpen) {
				burgerMenuParts.forEach(part => {
					part.classList.remove('burger-menu__part_open')
				})
				menu.classList.remove('header__menu_show');

				isMenuOpen = false;
			}
		})
	})
})
