$(document).ready(function ($) {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 20) {
			$('.nav__fixed').addClass('fixed-top');
		} else {
			$('.nav__fixed').removeClass('fixed-top');
		}
	});
});