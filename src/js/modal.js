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
    $('#form-name').val('');
    $('#form-phone').val('');
  });
});