(function (window, document, undefined) {
	'use strict';

	/*==============================
	Header
	==============================*/
	if (document.querySelector('.header__menu')) {
		var headerBtn = document.querySelector('.header__menu');
		var dropMenu = document.querySelector('.dropdown');
		// var headerNav = document.querySelector('.menu');
		headerBtn.addEventListener('click', function() {
			headerBtn.classList.toggle('header__menu--active');
			dropMenu.classList.toggle('active');
			// headerNav.classList.toggle('menu--active');
		});
	}

	/*==============================
	Hero carousel
	==============================*/
	if (document.querySelector('.hero__carousel')) {
		var elms = document.getElementsByClassName('hero__carousel');

		for ( var i = 0; i < elms.length; i++ ) {
			new Splide(elms[ i ], {
				type: 'loop',
				perPage: 1,
				drag: false,
				pagination: true,
				autoWidth: false,
				autoHeight: false,
				speed: 1600,
				gap: 24,
				arrows: false,
				focus: 0,
				breakpoints: {
					1199: {
						arrows: false,
						drag: true,
						pagination: false,
					},
				}
			}).mount();
		}
	}

	/*==============================
	Counter
	==============================*/
	if (document.querySelector('.club')) {
		$('.club__number span').counterUp({
			delay: 10,
			time: 1400
		});
	}

	/*==============================
	Residents carousel
	==============================*/
	if (document.querySelector('.residents')) {
		var elms = document.getElementsByClassName('residents');

		for ( var i = 0; i < elms.length; i++ ) {
			new Splide(elms[ i ], {
				type: 'loop',
				perPage: 3,
				drag: false,
				pagination: false,
				autoWidth: false,
				autoHeight: false,
				speed: 1600,
				gap: 24,
				arrows: false,
				focus: 0,
				breakpoints: {
					767: {
						arrows: false,
						drag: true,
						perPage: 1,
						gap: 24,
					},
					991: {
						arrows: false,
						drag: true,
						perPage: 2,
						gap: 24,
					},
					1199: {
						arrows: false,
						drag: true,
						perPage: 2,
						gap: 40,
					},
					1399: {
						arrows: false,
						perPage: 3,
						gap: 24,
					},
				}
			}).mount();
		}
	}

	/*==============================
	Speakers carousel
	==============================*/
	if (document.querySelector('.speakers')) {
		var elms = document.getElementsByClassName('speakers');

		for ( var i = 0; i < elms.length; i++ ) {
			new Splide(elms[ i ], {
				type: 'loop',
				perPage: 5,
				drag: false,
				pagination: false,
				autoWidth: false,
				autoHeight: false,
				speed: 1600,
				gap: 60,
				arrows: false,
				focus: 0,
				breakpoints: {
					575: {
						arrows: false,
						drag: true,
						perPage: 2,
						gap: 24,
					},
					767: {
						arrows: false,
						drag: true,
						perPage: 3,
						gap: 24,
					},
					991: {
						arrows: false,
						drag: true,
						perPage: 3,
						gap: 24,
					},
					1199: {
						arrows: false,
						drag: true,
						perPage: 3,
						gap: 40,
					},
					1399: {
						arrows: false,
						perPage: 5,
						gap: 30,
					},
					1599: {
						arrows: false,
						perPage: 5,
						gap: 50,
					},
				}
			}).mount();
		}
	}

	/*==============================
	Calendar
	==============================*/
	if (document.querySelector('.calendar')) {
		var elms = document.getElementsByClassName('calendar');

		for ( var i = 0; i < elms.length; i++ ) {
			new Splide(elms[ i ], {
				type: 'loop',
				perPage: 3,
				drag: false,
				pagination: false,
				autoWidth: false,
				autoHeight: false,
				speed: 1600,
				gap: 24,
				arrows: false,
				focus: 0,
				breakpoints: {
					767: {
						arrows: false,
						drag: true,
						perPage: 1,
						gap: 24,
					},
					991: {
						arrows: false,
						drag: true,
						perPage: 2,
						gap: 24,
					},
					1199: {
						arrows: false,
						drag: true,
						perPage: 2,
						gap: 24,
					},
					1399: {
						arrows: false,
						perPage: 2,
						gap: 24,
					},
				}
			}).mount();
		}
	}

})(window, document);