(function (window, document, undefined) {
	'use strict';

	/*==============================
	Header
	==============================*/
	if (document.querySelector('.header__menu')) {
		var headerBtn = document.querySelector('.header__menu');
		// var headerNav = document.querySelector('.menu');

		headerBtn.addEventListener('click', function() {
			headerBtn.classList.toggle('header__menu--active');
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
				type: 'slide',
				perPage: 1,
				drag: false,
				pagination: true,
				autoWidth: false,
				autoHeight: false,
				speed: 800,
				gap: 24,
				arrows: false,
				focus: 0,
				breakpoints: {
					1199: {
						type: 'loop',
						arrows: false,
						drag: true,
						pagination: false,
					},
				}
			}).mount();
		}
	}

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

	if (document.querySelector('.calendar')) {
		$('.calendar').evoCalendar({
			language: 'ru',
			firstDayOfWeek: 1,
			titleFormat: 'MM',
			eventHeaderFormat: 'd MM yyyy',
			sidebarToggler: true,
			eventListToggler: false,
			calendarEvents: [
				{
					id: '0',
					name: "Венчурные инвестиции",
					description: "Текст текст текст Текст текст текст Текст текст текст Текст текст текст Текст текст текст",
					date: "September/30/2023",
					type: "event",
				},
				{
					id: '1',
					name: "Онлайн-конференция Венчурные инвестиции",
					date: "October/1/2023",
					type: "event",
				},
				{
					id: '2',
					name: "Онлайн-конференция",
					description: "Текст текст текст",
					date: "October/5/2023",
					type: "event",
				},
			]
		});
	}


})(window, document);