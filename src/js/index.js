$(document).ready(function() {
  // очищаем форму
  $('#form-name').val('');
  $('#form-phone').val('');

  // текст для услуг
  var hoverText = 'Здесь будет короткое описание<br>о данной услуге';
  var hoverTextButton = 'от 500 р.';
  var serviceText, serviceTextButton;
  // изменение текста при наведении в услугах (services)
  $('.services__item').mouseenter(function() {
    serviceText = $('.services__text', this).html();
    serviceTextButton = $('.services__button', this).html();
    $('.services__text', this).html(hoverText);
    $('.services__button', this).html(hoverTextButton);
  });
  // и назад, при убирании мыши
  $('.services__item').mouseleave(function() {
    $('.services__text', this).html(serviceText);
    $('.services__button', this).html(serviceTextButton);
  });

  // настройки слайдера
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
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // анимация
  new WOW(
    {
      mobile: false
    }
  ).init();

  //Маска для телефона
  $('input[name=userphone]').mask('8 (999) 999-99-99');

  // валидация формы
  $('#form').validate({
    errorElement: "div",
    rules: {
      username: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userphone: {
        required: true
      }
    },
    messages: {
      username: {
        required: 'Заполните поле',
        minlength: jQuery.validator.format('Допустимая длина 2-15 символов')
      },
      userphone: {
        required: 'Заполните поле'
      }
    },
    errorClass: 'invalid'
  });
});