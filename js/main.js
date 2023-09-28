(function (window, document, undefined) {
	'use strict';

	/*==============================
	Residents carousel
	==============================*/
	if (document.querySelector('.residents')) {
		var elms = document.getElementsByClassName('residents');

		for ( var i = 0; i < elms.length; i++ ) {
			new Splide(elms[ i ], {
				type: 'slide',
				perPage: 3,
				drag: false,
				pagination: false,
				autoWidth: false,
				autoHeight: false,
				speed: 800,
				gap: 24,
				arrows: false,
				focus: 0,
				breakpoints: {
					767: {
						type: 'loop',
						arrows: false,
						drag: true,
						perPage: 1,
						gap: 24,
					},
					991: {
						type: 'loop',
						arrows: false,
						drag: true,
						perPage: 2,
						gap: 24,
					},
					1199: {
						type: 'loop',
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
				speed: 800,
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

})(window, document);