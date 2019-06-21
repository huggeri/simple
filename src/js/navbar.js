$(document).ready(function() {
  // когда экран меньше 1200 - появляется бургер меню
  showHideBurgerMenu();
  // при изменении размера - бургер меню или обычное меню
  $(window).resize(showHideBurgerMenu);
  // при клике на бургер раскрывается меню
    $('#burger').click(function() {
      if($(window).width() <= 1199) {
        if($('.navbar__menu').hasClass('hidden')) {
          $('.navbar__menu').removeClass('hidden');
        }
        else {
          $('.navbar__menu').addClass('hidden');
        }
      }
    });
    // если убрали мышь с менб - оно исчезает
    $('.navbar__menu').mouseleave(function() {
      if($(window).width() <= 1199) {
        if(!$('.navbar__menu').hasClass('hidden')) {
          $('.navbar__menu').addClass('hidden');
        }
      }
    });
});

function showHideBurgerMenu() {
  if($(window).width() > 1199) {
    if(!$('.navbar__burger-button').hasClass('hidden')) {
      $('.navbar__burger-button').addClass('hidden');
    }
    if($('.navbar__menu').hasClass('hidden')) {
      $('.navbar__menu').removeClass('hidden');
    }
  }
  else {
    if($('.navbar__burger-button').hasClass('hidden')) {
      $('.navbar__burger-button').removeClass('hidden');
    }
    if(!$('.navbar__menu').hasClass('hidden')) {
      $('.navbar__menu').addClass('hidden');
    }
  }
}