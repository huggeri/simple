$(document).ready(function() {
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

  // кнопки вверх-вниз
  $('#up-button').click(function() {
    $('html, body').animate({scrollTop: 0}, 2000);
  });

  $('#down-button').click(function() {
    $('html, body').animate({scrollTop: (0 + $('html, body').height())}, 2000);
  });

  // появляются и исчезают кнопки
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      if($('.navigate-buttons').hasClass('hidden'))
      {
        $('.navigate-buttons').removeClass('hidden');
      }
      $('.navigate-buttons').fadeIn('slow', 'linear');
    }
    else {
      $('.navigate-buttons').fadeOut('fast', 'swing');
    }
  });
});