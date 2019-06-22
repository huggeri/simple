$(document).ready(function() {
  var button = $('#header-button');
  var formButton = $('#form-button');
  var modal = $('#modal');
  var close = $('#close');

  function showModal() {
    modal.removeClass('hidden');
  }
  
  function hideModal() {
    modal.addClass('hidden');
  }
  
  button.on('click', showModal);

  close.on('click', function () {
    hideModal();
    cleanValue('#form').reset();
  });

  $('#form').submit(function (e) {
    if($('#form-phone').val().length > 16 && 
      $('#form-name').val().length > 1 && 
      !$('#form-phone').hasClass('invalid') && 
      !$('#form-name').hasClass('invalid')) {
        showModal();
      }
  });
});