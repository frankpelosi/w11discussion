// Challenge 1 //

// document.getElementById("subscribe").addEventListener("click", emailToggle);
// function emailToggle(){
// let checkToggle = document.getElementById('subscribe').checked;
// let emailDisplay = document.getElementById('emailDiv');
// if(checkToggle == true){
// emailDisplay.style.display = 'block';
// }
// else{
// emailDisplay.style.display = 'none';
// }
// document.querySelector('#subscribe').addEventListener('click',emailToggle())
// }
// document.querySelector('#subscribe').addEventListener('click',emailToggle())




// Challenge 2 //

document.getElementById("sameAddress").addEventListener("click", copyAddress);

function copyAddress(){
  var billingAddress = document.getElementById('bill').value;
  var homeAddress = document.getElementById('home');
  var copyBilling = document.getElementById('sameAddress').checked;
  homeAddress.value = billingAddress;
  if(copyBilling == true){
    homeAddress.disabled = true;
  }
  else {
    homeAddress.disabled = false;
    homeAddress.value = "";
  }
 }

 
//color of the day: Coral = Frank Pelosi and Artem Saakov