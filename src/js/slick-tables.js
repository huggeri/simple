$(document).ready(function() {
  $('.tables-block').slick( {
    infinite: false,
    dots: true,
    dotsClass: 'my-dots',
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});