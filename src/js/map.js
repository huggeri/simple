$(document).ready(function() {
  var mapInited = false;
  $(window).scroll(function () {
    if($(window).scrollTop() > 400 && !mapInited) {
      mapInited = true;
      if($(window).width() > 768) {
        $('#map').attr('src','https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A6bb8c56bfba77283f9149b6ae7b15d8b074f699499121b7c835ec5dc8950a32e&amp;width=100%25&amp;height=666&amp;lang=ru_RU&amp;scroll=false')
      }
      else if($(window).width() > 567) {
        $('#map').attr('src','https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Aae917d14dc9b5ff573da4112abad16198171c7ab2d05ce074ffa52126cfd7f11&amp;width=100%25&amp;height=900&amp;lang=ru_RU&amp;scroll=false')
      }
      else {
        $('#map').attr('src','https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Aae917d14dc9b5ff573da4112abad16198171c7ab2d05ce074ffa52126cfd7f11&amp;width=100%25&amp;height=750&amp;lang=ru_RU&amp;scroll=false')
      }
    }
  });
});

/*function init(){
  var myMap;

  if(!$('header').hasClass('thanks')) {
    if($(window).width() > 768) {
      myMap = new ymaps.Map("#map", {
        center: [55.86439844, 37.50781480],
        zoom: 16,
        controls: ['zoomControl']
      });
    }
    else {
      myMap = new ymaps.Map("#map", {
        center: [55.86657036, 37.51180592],
        zoom: 16,
        controls: ['zoomControl']
      });
    }
  }
  else {
    myMap = new ymaps.Map("#map", {
      center: [55.86406057, 37.51202050],
      zoom: 16,
      controls: ['zoomControl', 'searchControl']
      }, {
      searchControlProvider: 'yandex#search'
    });
  }

  myMap.behaviors.disable('scrollZoom');

  myPlacemark = new ymaps.Placemark([55.86406057, 37.51202050], {
    hintContent: 'Сантехнические работы',
    balloonContent: 'г. Москва, ул. Советская 48 корп. 3'
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: '/img/brif/placeholder.png',
        // Размеры метки.
        iconImageSize: [46, 66],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-23, -100],
    });

  myMap.geoObjects.add(myPlacemark);
}*/