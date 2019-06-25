$(document).ready(function() {
  // когда экран меньше 1200 - появляется бургер меню
  showHideBurgerMenu();
  // при изменении размера - бургер меню или обычное меню
  $(window).resize(showHideBurgerMenu);
  // при клике на бургер раскрывается меню
    $('#burger').click(function() {
      if($('.header-block .container').width() <= 750) {
        if(!$('.navbar__menu').hasClass('navbar__menu_active')) {
          $('.navbar__menu').addClass('navbar__menu_active');
        }
        else {
          $('.navbar__menu').removeClass('navbar__menu_active');
        }
      }
    });
    // если убрали мышь с меню - оно исчезает
    $('.navbar__menu').mouseleave(function() {
      if($('.header-block .container').width() <= 750) {
        if($('.navbar__menu').hasClass('navbar__menu_active')) {
          $('.navbar__menu').removeClass('navbar__menu_active');
        }
      }
    });

    //анимация плавного перехода к секциям
    $('a[href^="#"]').on('click', function(event) {
      // отменяем стандартное действие
      event.preventDefault();
      
      var sc = $(this).attr("href"),
          dn = $(sc).offset().top;
      /*
      * sc - в переменную заносим информацию о том, к какому блоку надо перейти
      * dn - определяем положение блока на странице
      */
      
      $('html, body').animate({scrollTop: dn}, 1000);
      
      /*
      * 1000 скорость перехода в миллисекундах
      */
    });
});

function showHideBurgerMenu() {
  if($('.header-block .container').width() > 750) {
    if(!$('.navbar__burger-button').hasClass('hidden')) {
      $('.navbar__burger-button').addClass('hidden');
    }
  }
  else {
    if($('.navbar__burger-button').hasClass('hidden')) {
      $('.navbar__burger-button').removeClass('hidden');
    }
  }
}