// рассчёт ширины части фона
function makeBorder(bgcClass, blockClass, borderSide, distanse, newWidth) {
  $(bgcClass).css('width', newWidth);
  $(blockClass).css(('border-' + borderSide), (distanse + 'px solid rgba(241, 241, 241, 0.55)'));
}
// удаляем класс
function deleteBgc(generalClass, bgcClass, blockClass, borderSide) {
  $(generalClass).removeClass(bgcClass);
  $(blockClass).css(('border-' + borderSide), '0');
  $(generalClass).width($('.services-section .container').width());
}

$(document).ready(function() {
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
      // меняем его в преимуществах 
      if(!$('.advantages-section .container').hasClass('advantages__bgc')) {
        $('.advantages-section .container').addClass('advantages__bgc');
      }
      makeBorder('.advantages__bgc', '.advantages-block', 'left', distanse, newWidth);
      //двигаем соответственно advantages__title
      $('.advantages__title').css('left', distanse);
    }
    // если бордер вдруг получется отрицательный, то мы удалем класс и возвращаем всё на место
    else {
      if($('.header-block .container').hasClass('header__bgc')) {
        deleteBgc('.header-block .container', 'header__bgc', '.navbar', 'right');
      }
      if($('.advantages-section .container').hasClass('advantages__bgc')) {
        deleteBgc('.advantages-section .container', 'advantages__bgc', '.advantages-block', 'left');
        $('.advantages__title').css('left', '0');
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
});