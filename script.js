"use strict";

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

var lowercase_code = arrayFromLowToHigh (65, 90)
var uppercase_code = arrayFromLowToHigh (97, 122)
var numeric_code = arrayFromLowToHigh (48, 57)
var specialchar_code = arrayFromLowToHigh (33,47).concat(arrayFromLowToHigh(58, 64))

// Collect number of characters required for password
  var pwlength = document.getElementById("pwlength").value;
  pwlength = parseInt(document.getElementById("pwlength"));
  
// Check length

  if (length < 8) {
    alert("Password length too short");
    return;
  }
    else if (length > 128) {
    alert("Password length too long");
    return;
  }  

  console.log(length);

  
//Input Form Checkbox for type of characters - Updated HTML

// Validate at least 1 type of character is selected

var uppercase = uppercase.checked
var lowercase = lowercase.checked
var numeric = numeric.checked
var specialchar = specialchar.checked
function generatePassword(length, lowercase, uppercase, numeric, specialchar){

    function checked () {

      var checkboxes = document.getElementsByClassName('checkboxes');
      var okay=false;

      for (var i = 0, l=checkboxes.length; i<l;i++) {
        if (checkboxes[i].checked) {
          okay=true;
          break;
        }

        else alert("Please tick a box");
        }
      }
}

if (uppercase) charCodes = charCodes.concat(uppercase_code)
if (numeric) charCodes = charCodes.concat(numeric_code)
if (specialchar) charCodes = charCodes.concat(specialchar_code)

var passwordCharacters = []
for (let i = 0; i < pwlength; i++) {

  var characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
  passwordCharacters.push(String.fromCharCode(characterCode))
}

function arrayFromLowToHigh (low, high) {

  var array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }  
  return array;
}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
}
