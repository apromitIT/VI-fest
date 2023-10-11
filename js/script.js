$(document).ready(function(){

	$('.btn-menu.icon-menu').click(function () {
		$('.main-menu').toggleClass('_open')
		$(this).toggleClass('_open')
		$(this).toggleClass('icon-menu')
		$(this).toggleClass('icon-close')
	})

	new Swiper(".fest-slider", {
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},

		pagination: {
			el: ".swiper-pagination",
			clickable: true,			
			},

			loop: true,

			effect: 'fade',
	});

});

