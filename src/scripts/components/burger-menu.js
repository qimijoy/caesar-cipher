document.addEventListener('DOMContentLoaded', () => {
	const burgerMenu = document.querySelector('.burger-menu');
	const burgerMenuParts = burgerMenu.querySelectorAll('.burger-menu__part');
	const menu = document.querySelector('.header__menu');

	burgerMenu.addEventListener('click', () => {
		burgerMenuParts.forEach(part => {
			part.classList.toggle('burger-menu__part_open')
		})
		menu.classList.toggle('header__menu_show');
	})
})
