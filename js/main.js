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
				type: 'loop',
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
			time: 800
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
				speed: 800,
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

	/*==============================
	Calendar
	==============================*/
	if (document.querySelector('.calendar')) {
		var elms = document.getElementsByClassName('calendar');

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

		$('#calendar-1').bitroidCalendarEv({
			lang: "ru",
			sundayFirst: false,
			years: "2023-2024",
			startDate: "01.10.2023",
			format: "DD.MM.YYYY",
			showEventBlock: false,
			events : [
				{
					day : "03",
					month : "10",
					year : "2023",
					event_description : "Описание события",
				},
				{
					day : "07",
					month : "10",
					year : "2023",
					event_description : "Описание события",
				},
				{
					day : "20",
					month : "10",
					year : "2023",
					event_description : "Описание события",
				}
			]
		});

		$('#calendar-2').bitroidCalendarEv({
			lang: "ru",
			sundayFirst: false,
			years: "2023-2024",
			startDate: "01.11.2023",
			format: "DD.MM.YYYY",
			showEventBlock: false,
			events : [
				{
					day : "16",
					month : "11",
					year : "2023",
					event_description : "Описание события",
				},
				{
					day : "18",
					month : "11",
					year : "2023",
					event_description : "Описание события",
				},
				{
					day : "25",
					month : "11",
					year : "2023",
					event_description : "Описание события",
				}
			]
		});

		$('#calendar-3').bitroidCalendarEv({
			lang: "ru",
			sundayFirst: false,
			years: "2023-2024",
			startDate: "01.12.2023",
			format: "DD.MM.YYYY",
			showEventBlock: false,
			events : [
				{
					day : "12",
					month : "12",
					year : "2023",
					event_description : "Описание события",
				},
				{
					day : "19",
					month : "12",
					year : "2023",
					event_description : "Описание события",
				}
			]
		});

		$('#calendar-4').bitroidCalendarEv({
			lang: "ru",
			sundayFirst: false,
			years: "2023-2024",
			startDate: "01.01.2024",
			format: "DD.MM.YYYY",
			showEventBlock: false,
			events : [
				{
					day : "03",
					month : "01",
					year : "2024",
					event_description : "Описание события",
				},
				{
					day : "05",
					month : "01",
					year : "2024",
					event_description : "Описание события",
				}
			]
		});

		$('#calendar-5').bitroidCalendarEv({
			lang: "ru",
			sundayFirst: false,
			years: "2023-2024",
			startDate: "01.02.2024",
			format: "DD.MM.YYYY",
			showEventBlock: false,
			events : [
				{
					day : "03",
					month : "02",
					year : "2024",
					event_description : "Описание события",
				},
				{
					day : "05",
					month : "02",
					year : "2024",
					event_description : "Описание события",
				}
			]
		});
	}

})(window, document);