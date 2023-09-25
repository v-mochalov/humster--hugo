$(document).ready(function () {
	$('.reviews__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: true,
		infinite: true,		
		adaptiveHeight: false,
		responsive: [
			{
				breakpoint: 743,
				settings: {
					arrows: false
				}
			}
		]
	});
});