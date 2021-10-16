$(function() {
    //* Popup

    $('.popup__link').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

    $('.gallery__item-inner').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},

	});

	// =======================================================

    //* Slider

    $('.gallery__slider').slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="img/gallery/arrow-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="img/gallery/arrow-right.svg" alt=""></button>',

    });

	//* Burger-menu
	const menuBtn = $('.menu__btn');
	const menuList = $('.menu__list');

	menuBtn.on('click', (e) => {
		menuList.toggleClass('menu__list--active');
		$('body').toggleClass('lock');
	});

	// =======================================================

	//* Smooth scroll
	const scroll = new SmoothScroll('.header__arrow a[href*="#"]', {
		speed: 1000,
	});
});