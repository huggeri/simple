$(function() {
  $('.map').css('width', '100%');
  setMapSize();
});

function setMapSize() {
  if($(window).width() > 1200) {
    var mapHeight = $(window).height() - $('header').height() - $('footer').height();
    $('.map').css('height', mapHeight);
    $('#map').attr('src', ('https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Aba267c6ecba229d32398464d8cc58333724b4dd81e2f0a1e748675b9fec23910&amp;width=100%25&amp;height=' + mapHeight + '&amp;lang=ru_RU&amp;scroll=false'));
  }
  else {
    $('.map').css('height', 600);
    $('#map').attr('src', 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Aba267c6ecba229d32398464d8cc58333724b4dd81e2f0a1e748675b9fec23910&amp;width=100%25&amp;height=600&amp;lang=ru_RU&amp;scroll=false');
  }
}