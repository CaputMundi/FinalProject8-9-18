function idCard(){
  var first = document.getElementById('firstName').value;
  var last = document.getElementById('lastName').value;
  var Address = document.getElementById('Address').value;
  var idCard = "I am " + first +" "+ last;
  var idCard1 = Address;

  document.getElementById("postFullName").innerHTML = idCard ;
  document.getElementById("postAddress").innerHTML = idCard1 ;

  var Age = document.getElementById('Age').value;
  var phoneNumber = document.getElementById('phoneNumber').value;
  var numberArray = [Age, phoneNumber];

  for (var i=0; i < numberArray.length; i++){
    if (numberArray[i] <= 100){
      document.getElementById('postAge').innerHTML = Age;
    }

      if (numberArray[i] > 100){
        document.getElementById('postPhoneNumber').innerHTML = phoneNumber;
    }
  }
}
