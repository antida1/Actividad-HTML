$(document).ready(function(){
  $('.form-group').hide()
});
function validate () {
  var username, password
  username = $('#username').val()
  password = $('#password').val()
  console.log(username)
  console.log(password)
  if ((username === undefined || username === '') || (password === undefined || password === '')) {
    $('.form-group').show()
    $('.form-group').css('color', '#db1325')
  } else {
    $('.form-group').hide()
  };
};