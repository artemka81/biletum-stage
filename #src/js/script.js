@@include('lang.js');


/* Slider  */
new Swiper('.slider-container',{
	slidesPerView: 1,
	watchOverflow: true,
	spaceBetween:16,
	touchRatio:2,
	grabCursor: true,
	watchOverflow: true,
	navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	},
	breakpoints: {
		640: {
			slidesPerView: 1,
			spaceBetween: 32,
		},
		1023: {
			slidesPerView: 2,
			spaceBetween: 32,
		},
		1400: {
			slidesPerView: 3,
			spaceBetween: 40,
		},
	},
});



/* Reviews  */
new Swiper('.reviews-slider',{
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	spaceBetween:24,
	touchRatio:2,
	slidesPerView: 1,
	grabCursor: true,
	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	},

	breakpoints: {
		640: {
			slidesPerView: 1,
			spaceBetween: 24,
		},
		1023: {
			slidesPerView: 2,
			spaceBetween: 24,
		},
		1400: {
			slidesPerView: 2.4,
			spaceBetween: 24,
		},
	},
});

/* scrollTo */
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
const iconMenu = document.querySelector(".menu__icon");
const lang = document.querySelector(".translate_wrapper");
const mobileMenu = document.querySelector('.header__menu');

if(menuLinks.length > 0){
	menuLinks.forEach(link => {
		link.addEventListener("click", onMenuLinkClick)
	});
}

function onMenuLinkClick(e){
	const menuLink = e.target;
	if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
		const gotoSection = document.querySelector(menuLink.dataset.goto);
		const gotoValue = gotoSection.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

		if(iconMenu.classList.contains('active')){
			document.body.classList.remove('lock');
			iconMenu.classList.remove('active');
			mobileMenu.classList.remove('active');
		}

		window.scrollTo({
			top:gotoValue,
			behavior: "smooth"
		});
		e.preventDefault();
	}
}


/* Mobile menu */
if(iconMenu){


	iconMenu.addEventListener("click", function(e){

	document.body.classList.toggle('lock');
	iconMenu.classList.toggle('active');
	mobileMenu.classList.toggle('active');

	});
}

