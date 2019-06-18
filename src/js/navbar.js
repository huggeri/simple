$(document).ready(function() {
  // когда экран меньше какого-то и на мышь кликнули - появляется навигация
  if($(window).width() <= 1190) {
    $('#navbar__btn').click(function() {
      if($('.navbar__nav').hasClass('hidden')) {
        $('.navbar__nav').removeClass('hidden');
      }
      else {
        $('.navbar__nav').addClass('hidden');
        if(!$('.navbar__menu').hasClass('hidden')) {
          $('.navbar__menu').addClass('hidden');
        }
      }
    });
  }
  else {
    $('.navbar__nav').removeClass('hidden');
  }
  //когда мышь на пункте навигации - появляется меню
  $('#second').hover(function() {
    if($('.navbar__menu').hasClass('hidden')) {
      $('.navbar__menu').removeClass('hidden');
    }
  });

  $('.navbar__menu').mouseleave(function() {
    if(!$('.navbar__menu').hasClass('hidden')) {
      $('.navbar__menu').addClass('hidden');
    }
  });
});