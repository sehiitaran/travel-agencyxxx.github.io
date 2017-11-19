window.onscroll = function () {
	var html = document.documentElement, body = document.body;
	var navigation = document.querySelector('.main-nav');
	if(html.scrollTop>50||body.scrollTop>50) {
		navMain.classList.add('main-nav-scroll');
	}else{
		navMain.classList.remove('main-nav-scroll');
	} 
}