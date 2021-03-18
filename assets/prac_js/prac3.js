var header = document.getElementById('header');
var logo = document.getElementById('lo');
var menu = document.querySelectorAll('#menu > a');

window.addEventListener('scroll', function () {
	if (window.scrollY > 100) {
		header.classList.add('animate');
		logo.classList.add('color');
		for(let i = 0; i < menu.length; i++){
			menu[i].classList.add('color');
		}
	} else {
		header.classList.remove('animate');
		logo.classList.remove('color');
		for(let i = 0; i < menu.length; i++){
			menu[i].classList.remove('color');
		}
	}
});
