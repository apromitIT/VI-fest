$(document).ready(function(){


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

			breakpoints: {
				1439: {
					
				}
			}

	});

});

