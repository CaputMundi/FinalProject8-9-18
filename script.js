function idCard() {
  var first = document.getElementById('firstName').value;
  var last = document.getElementById('lastName').value;
  var addy = document.getElementById('Address').value;
  var idCard = "Hi" + first +""+last+""+addy;
  document.getElementById('postFullName').innerHTML = idCard;
}
