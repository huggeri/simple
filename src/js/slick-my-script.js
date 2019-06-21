$(document).ready(function() {
  $('.general-section').slick( {
    infinite: false,
    dots: true,
    dotsClass: 'my-dots',
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000
  });

  $('.reviews-block').slick( {
    infinite: false,
    dots: true,
    dotsClass: 'my-dots',
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 2,

    responsive: [ 
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});