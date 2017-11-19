var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav-toggle');
var mainLogo = document.querySelector('.main-logo');



navToggle.addEventListener('click', function() {
	if(navMain.classList.contains('main-nav-open')){
		navMain.classList.remove('main-nav-open');
		
		navToggle.classList.remove('main-nav-toggle-open');
		navToggle.classList.add('main-nav-toggle-close');
		mainLogo.classList.remove('main-logo-open');

	}else{
		navMain.classList.add('main-nav-open');
		navToggle.classList.remove('main-nav-toggle-close');
		navToggle.classList.add('main-nav-toggle-open');
		mainLogo.classList.add('main-logo-open');

	}
});