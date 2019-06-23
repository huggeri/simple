$(document).ready(function() {
  // очищаем форму
  $('#form-name').val('');
  $('#form-phone').val('');
  
  // присваиваем высоту контейнеру
  $('.advantages__bgc').height($('.advantages-section .container').height());
  
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
  // убираем подчеркивания в new__title при уходе мыши с объекта
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