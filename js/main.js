$(document).ready(function ($) {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 20) {
			$('.nav__fixed').addClass('fixed-top');
		} else {
			$('.nav__fixed').removeClass('fixed-top');
		}
	});
});

$('.slide-brend__items').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	arrows: true,
	dots: true,
	centerMode: true,
	variableWidth: true,
	// responsive: [{
	// 		breakpoint: 961,
	// 		settings: {
	// 			slidesToShow: 1,
	// 			slidesToScroll: 1,
	// 		}
	// 	},
	// 	{
	// 		breakpoint: 721,
	// 		settings: {
	// 			slidesToShow: 1,
	// 			slidesToScroll: 1,
	// 		}
	// 	},
	// 	{
	// 		breakpoint: 641,
	// 		settings: {
	// 			slidesToShow: 1,
	// 			slidesToScroll: 1,
	// 		}
	// 	},
	// 	{
	// 		breakpoint: 320,
	// 		settings: {
	// 			slidesToShow: 1,
	// 			slidesToScroll: 1,
	// 		}
	// 	}
	// ]
});