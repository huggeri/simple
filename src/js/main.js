$(document).ready(function() {
  // изменение текста при наведении в услугах и назад, при убирании мыши
  var hoverText = 'Здесь будет короткое описание<br>о данной услуге';
  var hoverTextButton = 'от 500 р.';
  var serviceText, serviceTextButton;

  $('.services__item').mouseenter(function() {
    serviceText = $('#service-description', this).html();
    serviceTextButton = $('#service-button', this).html();
    $('#service-description', this).html(hoverText);
    $('#service-button', this).html(hoverTextButton);
  });

  $('.services__item').mouseleave(function() {
    $('#service-description', this).html(serviceText);
    $('#service-button', this).html(serviceTextButton);
  });
});