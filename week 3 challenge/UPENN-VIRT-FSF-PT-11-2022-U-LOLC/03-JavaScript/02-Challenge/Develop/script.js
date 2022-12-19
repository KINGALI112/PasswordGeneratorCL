// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password;

}
//DOM elements

 //Generate Functions
 function getRandomLower() {
 return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
 }

 function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
 }
 
 function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
 }
 function getRandomSymbol(){
  
  return symbols[Math.floor(Math.random() * symbols.length)];
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 
 


  

//Generate password funtion
function generatePassword() {
  
  var resultEl = ""
const lengthEl = prompt ("How many characters would you like?")
const uppercaseEl = confirm ("Would you like upper case")
const lowercaseEl = confirm ("Would you like lower case?")
const numberEl = confirm ("would you like numbers?")
const symbolsEl = confirm ("would you like symbols?")

const symbols = '!@#$%^&*(){}[]<>/,.';
const numbers = '0123456789'
const charactersupper = 'QAZWSXEDCRFVTGBYHNUJMIKOLP'
const characterlower = 'qazwsxedcrfvtgbyhnujmikolp'

if (uppercaseEl){
resultEl+= charactersupper;

}

if (lowercaseEl) {
resultEl+= characterlower;
}
if(numberEl){
  resultEl+= numbers;
}
if (symbolsEl){
  resultEl+= symbols;
}
console.log (resultEl);
  

  let finalPassword = '';

  for (let i = 0; i < lengthEl; i++) {
   var random = Math.floor(Math.random() * resultEl.length)
   console.log(random);
    finalPassword+= resultEl.charAt (random);
    
  }
console.log(finalPassword); 
return finalPassword;
  



}
