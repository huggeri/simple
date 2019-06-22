$(document).ready(function() {
  ymaps.ready(init);
});

function init(){
  var myMap;

  if(!$('header').hasClass('thanks')) {
    if($(window).width() > 768) {
      myMap = new ymaps.Map("#map", {
        center: [55.86439844, 37.50781480],
        zoom: 16,
        controls: ['zoomControl', 'searchControl']
        }, {
        searchControlProvider: 'yandex#search'
      });
    }
    else {
      myMap = new ymaps.Map("#map", {
        center: [55.86657036, 37.51180592],
        zoom: 16,
        controls: ['zoomControl', 'searchControl']
        }, {
        searchControlProvider: 'yandex#search'
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
}