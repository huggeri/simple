$(document).ready(function() {
  $('.navigate-buttons').fadeOut('fast');
  // очищаем форму
  $('#form-name').val('');
  $('#form-phone').val('');
  
  //рассчёты для фона в шапке и преимуществах
  function calcBgc() {
    // переменные для рассчёта фона
    var percent, percentAdv;
    var distanse = ($('.header-block').width() - $('.header-block .container').width()) / 2;
    var add = 0;

    // width зависит от размера окна и контейнеров
    if ($(window).width() > 1300) {
      percent = 34.1, percentAdv = 63;
    } 
    else if ($(window).width() > 1199) {
      percent = 34.1, percentAdv = 58;
    }
    else if ($(window).width() > 768) {
      percent = 55.7, percentAdv = 85;
    }
    else if ($(window).width() > 567) {
      percent = 80.8, percentAdv = 100, add = distanse;
    }
    else {
      percent = 78, percentAdv = 100, add = distanse;
    }

    // считаем ширину
    var newWidth = distanse + $('.header-block .container').width() * percent / 100;
    var newWidth2 = add + distanse + $('.advantages-section .container').width() * percentAdv / 100;

    // присваиваем ширину
    $('.header__bgc').width(newWidth);
    $('.advantages__bgc').width(newWidth2);
    // присваиваем высоту контейнеру
    $('.advantages__bgc').height($('.advantages-section .container').height());
  }

  // присваиваем ширину при загрузке документа
  calcBgc();
  // если экран поменялся - новые расчёты
  $(window).resize(calcBgc);

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
        breakpoint: 1199,
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

  // кнопки вверх-вниз
  $('#up-button').click(function() {
    $('html, body').animate({scrollTop: 0}, 2000);
  });

  $('#down-button').click(function() {
    $('html, body').animate({scrollTop: (0 + $('html, body').height())}, 2000);
  });

  // появляются и исчезают кнопки
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 400) {
      $('.navigate-buttons').fadeIn('slow', 'linear');
    }
    else {
      $('.navigate-buttons').fadeOut('fast', 'swing');
    }
  });
});