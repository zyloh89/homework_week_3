// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
 
  function generatePassword(){
  alert("Please provide the criteria required for your password");
  
// Collect number of characters required for password
  var length = prompt("How many characters do you require in your password");
  length = parseInt(length);

// Check length
console.log(length);
  if (length < 8) {
    alert("Password length too short");
    return;
  }
    else if (length > 128) {
    alert("Password length too long");
    return;
  }  

//Input Form Checkbox for type of characters - Updated HTML

// Validate at least 1 type of character is selected
alert("Please tick the character types required.");
var checked = document.checkboxes.lowercase.checked || document.checkboxes.uppercase.checked||document.checkboxes.numeric.checked|| document.checkboxes.specialchar.checked

 if (checked == true){
 }

 else {
   alert ("Please tick at least one character type.")
 }

}
console.log(checkboxes)

//put all checkbox in a class

// id = each checkbox






// Validate at least 1 type of character is selected


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
