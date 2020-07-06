// -----fixed-menu----
$(document).ready(function ($) {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 20) {
			$('.nav__fixed').addClass('fixed-top');
		} else {
			$('.nav__fixed').removeClass('fixed-top');
		}
	});
});
// --------------

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
	responsive: [{
			breakpoint: 1279,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 721,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 641,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 320,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		}
	]
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

//-----аккордион----- 
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
// --------------

// ----запрет скролла карты-----
$(document).ready(function () {
	$('#map1').addClass('scrolloff');
	$('#overlay').on('click', function () {
		$('#map1').removeClass('scrolloff');
	});
	$("#map1").mouseleave(function () {
		$('#map1').addClass('scrolloff');
	});
});
// -------------

// ------калькулятор-----------
let currentStep = 1;
function checkedInput(n) {
	//функция проверики всех чекбоксов на данном шаге на чекед
	let checkStep = document.querySelectorAll('.check-step-' + n),
			nextSteps = document.getElementById('next-step'),
			ch1 = document.getElementById('step-' + n + '-ch1'),
			ch2 = document.getElementById('step-' + n + '-ch2'),
			ch3 = document.getElementById('step-' + n + '-ch3'),
			ch4 = document.getElementById('step-' + n + '-ch4'),
			ch5 = document.getElementById('step-' + n + '-ch5'),
			ch6 = document.getElementById('step-' + n + '-ch6'),
			ch7 = document.getElementById('step-' + n + '-ch7'),
			ch8 = document.getElementById('step-' + n + '-ch8')
	let ch9 = null;
	if (currentStep === 1) {
		ch9 = document.getElementById('step-' + n + '-ch9')
	}

	for (let r = 0; checkStep.length > r; r++) {

		if (n === 1) {
			if ((ch1.checked) || (ch2.checked) || (ch3.checked) || (ch4.checked) || (ch5.checked) || (ch6.checked) || (ch7.checked) || (ch8.checked) || (ch9.checked)) {
				nextSteps.dataset.disabled = "false"
			} else {
				nextSteps.dataset.disabled = "true"
			}
			
			checkStep[r].addEventListener('click', function() {
				if ((ch1.checked) || (ch2.checked) || (ch3.checked) || (ch4.checked) || (ch5.checked) || (ch6.checked) || (ch7.checked) || (ch8.checked) || (ch9.checked)) {
					nextSteps.dataset.disabled = "false"
				} else {
					nextSteps.dataset.disabled = "true"
				}
			})
		}

		if (n === 2) {
			if ((ch1.checked) || (ch2.checked) || (ch3.checked) || (ch4.checked) || (ch5.checked) || (ch6.checked) || (ch7.checked) || (ch8.checked)) {
				nextSteps.dataset.disabled = "false"
			} else {
				nextSteps.dataset.disabled = "true"
			}

			checkStep[r].addEventListener('click', function () {
				if ((ch1.checked) || (ch2.checked) || (ch3.checked) || (ch4.checked) || (ch5.checked) || (ch6.checked) || (ch7.checked) || (ch8.checked)) {
					nextSteps.dataset.disabled = "false"
				} else {
					nextSteps.dataset.disabled = "true"
				}
			})
		}
	}

};
checkedInput(currentStep);

function nextStep(n) {
	// функция перехода на другой шаг
	let nextSteps = document.getElementById('next-step');
	//проверка на атрибут disabled и n = -1(кнопка назад)
	if ((nextSteps.dataset.disabled === "false") || (n == '-1')) {
		
		let calcItems = document.querySelectorAll('.calc__items');
		
		if (((currentStep + n) < (calcItems.length + 1)) && (currentStep + n >= 1)) {
			currentStep = currentStep + n;
			let itemStep = document.querySelectorAll('.step__item'),
					currentNumder = document.getElementById('current-numder'),
					stepsBar = document.getElementById('steps-bar'),
					prevStep = document.getElementById('prev-step');
	
			currentNumder.innerText = currentStep;
	
			for (let i = 0; calcItems.length > i; i++) {
				let numberId = calcItems[i].getAttribute('id'),
						item = document.getElementById('step-' + currentStep);
	
				if (numberId[4] = currentStep) {
					item.style.display = 'flex';
					for (let a = 0; itemStep.length > a; a++) {
						let numberId2 = itemStep[a].getAttribute('id');
	
						if (numberId2[5] != currentStep) {
							itemStep[a].style.display = 'none';
						}
						if (currentStep === calcItems.length) {
							nextSteps.style.display = 'none';
							stepsBar.style.display = 'none';
						} else {
							nextSteps.style.display = 'block';
							stepsBar.style.display = 'block';
							prevStep.style.opacity = '1';
							prevStep.disabled = false;
							nextSteps.dataset.disabled = "true"
						}
						if (currentStep === 1) {
							prevStep.style.opacity = '0';
							prevStep.disabled = true;
						} 
					}
				}
			}
		}
	}
	checkedInput(currentStep);
};
// ---конец-калькулятор


//проверка чекбокса при загрузке страницы и отключение/включение кнопки
function checkBoxChecked() {
	let btnForm = document.querySelectorAll('.btn__form')
	let formCheckbox = document.querySelectorAll('.form__checkbox')
	
	for (let a = 0; formCheckbox.length > a; a++) {
		if (formCheckbox[a].checked) {
			btnForm[a].disabled = false;
		} else {
			btnForm[a].disabled = true;
		}
		//проверка чекбокса при клике и отключение/включение кнопки
		formCheckbox[a].addEventListener('click', function() {
			// console.log('hi')
				if (formCheckbox[a].checked) {
					btnForm[a].disabled = false;
				} else {
					btnForm[a].disabled = true;
				}
		})
	}
};
checkBoxChecked();
// --------------

/* mask */
window.addEventListener("DOMContentLoaded", function () {
	[].forEach.call(document.querySelectorAll('.tel'), function (input) {
		var keyCode;

		function mask(event) {
			event.keyCode && (keyCode = event.keyCode);
			var pos = this.selectionStart;
			if (pos < 3) event.preventDefault();
			var matrix = "+7 (___) ___-__-__",
				i = 0,
				def = matrix.replace(/\D/g, ""),
				val = this.value.replace(/\D/g, ""),
				new_value = matrix.replace(/[_\d]/g, function (a) {
					return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
				});
			i = new_value.indexOf("_");
			if (i != -1) {
				i < 5 && (i = 3);
				new_value = new_value.slice(0, i)
			}
			var reg = matrix.substr(0, this.value.length).replace(/_+/g,
				function (a) {
					return "\\d{1," + a.length + "}"
				}).replace(/[+()]/g, "\\$&");
			reg = new RegExp("^" + reg + "$");
			if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
			if (event.type == "blur" && this.value.length < 5) this.value = ""
		}

		input.addEventListener("input", mask, false);
		input.addEventListener("focus", mask, false);
		input.addEventListener("blur", mask, false);
		input.addEventListener("keydown", mask, false)

	});

});
/* ----------- */

/* смещение инпута при фокусе и клике */
let formInput = document.querySelectorAll('.form-input__tel');
for (let i = 0; formInput.length > i; i++) {
	let formInputFunction = function () {
		if (!formInput[i].value == '') {
			formInput[i].classList.add('input-left');
		} else {
			formInput[i].classList.remove('input-left');
		}
	};
	formInputFunction();

	let formInputFunctionAll = function () {
		if ((!formInput[i].value == '') && (formInput[i].value != '+7 ')) {
			formInput[i].classList.add('input-left');
		} else {
			formInput[i].classList.remove('input-left');
		}
	};

	formInput[i].addEventListener('focus', formInputFunctionAll);
	formInput[i].addEventListener('blur', formInputFunctionAll);
	formInput[i].addEventListener('click', formInputFunction);
	formInput[i].addEventListener('keyup', formInputFunctionAll);
}
// ------------------