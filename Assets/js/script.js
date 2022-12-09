// Assignment Code
var generateBtn = document.querySelector("#generate"); // variable called generateBtn looks at the HTML document using a querySelector and finds the ID "generate." ID "generate" is attached to the on-screen generate password BUTTON

const SPECIAL_CHARS = [" ", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "?", "@", "[", "]", "\\", "^", "_", "{", "|", "}", "~"];
const NUMERIC_CHARS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const LOWERCASE_CHARS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const UPPERCASE_CHARS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; // there may be a method that can consolidate this somehow
var selectedCharacters = [];
var userLimit
var password

function limitCheck() {
  userLimit = prompt("Please choose from 8 to 128 characters to include.");
  if (userLimit < 8 || userLimit > 128) {
    userLimit = alert("This number must be between 8 and 128 to continue.");
    return limitCheck();
  }
}
function specialCheck() {
  var userSpecial = confirm("Would you like to include special characters?");
  if (userSpecial) {
    selectedCharacters = selectedCharacters.concat(SPECIAL_CHARS);
  }
}
function numericCheck() {
  var userNumeric = confirm("Would you like to include numbers?");
  if (userNumeric) {
    selectedCharacters = selectedCharacters.concat(NUMERIC_CHARS);
  } 
}
function lowercaseCheck() {
  var userLowercase = confirm("Include lowercase letters?");
  if (userLowercase) {
    selectedCharacters = selectedCharacters.concat(LOWERCASE_CHARS);
  }
}
function uppercaseCheck() {
  var userUppercase = confirm("Include uppercase letters?");
  if (userUppercase) {
    selectedCharacters = selectedCharacters.concat(UPPERCASE_CHARS);
  }
}
// in case user mistakenly does not select any character type to be included in the password
function empty() {
  if (selectedCharacters.length === 0) {
    alert("Password has no character types added. Please try again with at least one character type.");
    userCriteria();
  }
}

// calls functions where user sets a character quantity limit and selects character types to include
function generatePassword() {
  limitCheck();
  specialCheck();
  numericCheck();
  lowercaseCheck();
  uppercaseCheck();
  empty();
  // sets password as an empty array
  password = [];
  // randomly chooses an index location of selectedCharacters up to the number of the userLimit
  for (var i = 0; i < userLimit; i++) {
    var randomizer = Math.floor(Math.random() * selectedCharacters.length);
    password.push(selectedCharacters[randomizer]);
  }
  // converts password from an array to a string
  password = password.join("");
}

// Write password to the #password input
function writePassword() {
   generatePassword();
   var passwordText = document.querySelector("#password");
   passwordText.value = password;
 }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); // the event listener watches "click" on the generateBtn for when it is clicked, THEN writePassword is called, which begins generatePassword