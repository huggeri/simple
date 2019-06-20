$(document).ready(function() {
  $('.general-section').slick( {
    infinite: false,
    dots: true,
    dotsClass: 'my-dots',
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  $('.reviews-block').slick( {
    infinite: false,
    dots: true,
    dotsClass: 'my-dots',
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 2
  });
});