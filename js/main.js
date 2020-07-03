$(document).ready(function ($) {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 20) {
			$('.nav__header--fixed').addClass('fixed-top');
		} else {
			$('.nav__header--fixed').removeClass('fixed-top');
		}
	});
});