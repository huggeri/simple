// рассчёт ширины части фона
function makeBorder(bgcClass, blockClass, borderSide, distanse, newWidth) {
  $(bgcClass).css('width', newWidth);
  $(blockClass).css(('border-' + borderSide), (distanse + 'px solid rgba(241, 241, 241, 0.55)'));
}

$(document).ready(function() {
  $('#form-name').val();
  $('#form-phone').val();

  //рассчёты для фона в шапке и преимуществах
  function calcBgc() {
    // переменные для рассчёта фона
    // используется секция, размеры которой не меняются диначески
    var distanse = ($('.services-section').width() - $('.services-section .container').width()) / 2;
    var newWidth = distanse + $('.services-section .container').width();
    // если бордер будет больше 0
    if (distanse > 0) {
      // меняем его в шапке
      if(!$('.header-block .container').hasClass('header__bgc')) {
        $('.header-block .container').addClass('header__bgc');
      }
      makeBorder('.header__bgc', '.navbar', 'right', distanse, newWidth);
      $('.header__bgc').css('max-width', $('.services-section').width());
      // меняем его в преимуществах
      
      if(!$('.advantages-section .container').hasClass('advantages__bgc')) {
        $('.advantages-section .container').addClass('advantages__bgc');
      }
      if($(window).width() > 768) { 
        makeBorder('.advantages__bgc', '.advantages-block', 'left', distanse, newWidth);
        //двигаем соответственно advantages__title
        $('.advantages__title').css('left', distanse);
        $('.advantages__bgc').css('max-width', '100%');
      }
      else {
        $('.advantages-block').css('border-left-width', '0');
        $('.advantages__title').css('left', '0');
        $('.advantages__bgc').css('max-width', $('.services-section').width());
        $('.advantages__bgc').css('width', $('.services-section').width());
      }
    }
  }

  // при загрузке документа
  calcBgc();
  // если экран поменялся - новые расчёты
  $(window).resize(calcBgc);

  // текст для услуг
  var hoverText = 'Здесь будет короткое описание<br>о данной услуге';
  var hoverTextButton = 'от 500 р.';
  var serviceText, serviceTextButton;
  // изменение текста при наведении в услугах (services)
  $('.services__item').mouseenter(function() {
    serviceText = $('#service-description', this).html();
    serviceTextButton = $('#service-button', this).html();
    $('#service-description', this).html(hoverText);
    $('#service-button', this).html(hoverTextButton);
  });
  // и назад, при убирании мыши
  $('.services__item').mouseleave(function() {
    $('#service-description', this).html(serviceText);
    $('#service-button', this).html(serviceTextButton);
  });

  // подключение подчеркивания в new__title
  $('.news__item').mouseenter(function() {
    $('.new__title', this).addClass('text-shadow');
    $('.new__title', this).addClass('underline');
  });
  // убираем подчеркивания в new__title прои уходе мыши с объекта
  $('.news__item').mouseleave(function() {
    $('.new__title', this).removeClass('text-shadow');
    $('.new__title', this).removeClass('underline');
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