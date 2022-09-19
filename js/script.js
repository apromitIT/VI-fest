// SLIDER https://kenwheeler.github.io/slick/

let slider = $("#sliderExhibit");


slider.slick({
 	arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
	dots: true,
  centerMode: true,
  focusOnSelect: true

});

$('.multiple-items').slick({
  infinite: true,
	arrows: true,
	dots: true,
  slidesToShow: 3,
  slidesToScroll: 1
});