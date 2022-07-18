function changeMode() {
	changeClasses(); //função que mudara tudo texto e cores
	changeText();
}

function changeClasses() {
	button.classList.toggle(darkModeClass);
	h1.classList.toggle(darkModeClass);    //função que adiciona a classe darkmode
	body.classList.toggle(darkModeClass);
	
}

function changeText() {
	const lightMode = 'Light Mode';
	const darkMode = 'Dark Mode';   //função que muda os textos

	if (body.classList.contains(darkModeClass)) {
		button.innerHTML = lightMode;
		h1.innerHTML = darkMode + ' ON';
		return;
	}

	button.innerHTML = darkMode;
	h1.innerHTML = lightMode + ' ON';
}

const darkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');               //constantes que serao usadas
const body = document.getElementsByTagName('body')[0];

button.addEventListener('click', changeMode);