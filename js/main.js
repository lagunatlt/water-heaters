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
$('.slide-portfolio__items').slick({
	infinite: true,
	slidesToShow: 1,
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
$('.slide-certif__items').slick({
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
$('.slide-reviews').slick({
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

function accord() {
	let accordions = document.getElementsByClassName("accordion");
	
	for (let i = 0; i < accordions.length; i++) {
		accordions[i].onclick = function () {
			this.classList.toggle('is-open');
			this.classList.toggle('rotate');
	
			let content = this.nextElementSibling;
			if (content.style.maxHeight) {
				content.style.maxHeight = null;
			} else {
				content.style.maxHeight = content.scrollHeight + "px";
			}
		};
	}
}
accord();