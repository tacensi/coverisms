window.addEventListener('DOMContentLoaded', () => {

});

const navButton = document.querySelector('.activate-nav-button');
navButton.addEventListener('click', () => {
	const nav = document.querySelector('.main-nav');
	nav.classList.toggle('active');
})
