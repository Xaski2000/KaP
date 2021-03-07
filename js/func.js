
function consoleBG() {
	if ($(window).scrollTop() == 0) {
		$('.header__container-first').css('opacity', '1');
		$('.header__container-first').css('z-index', '10');
		$('.header__container-main').css('opacity', '0');
		$('.header__container-main').css('z-index', '5');
	} else {
		$('.header__container-first').css('opacity', '0');
		$('.header__container-first').css('z-index', '5');
		$('.header__container-main').css('opacity', '1');
		$('.header__container-main').css('z-index', '10');
	}
}
consoleBG();

$(window).scroll(function () {
	consoleBG();
});