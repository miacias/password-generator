// Assignment Code
const generateButton = document.querySelector("#generate");

const SPECIAL_CHARS = [" ", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "?", "@", "[", "]", "\\", "^", "_", "{", "|", "}", "~"];
const NUMERIC_CHARS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const LOWERCASE_CHARS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const UPPERCASE_CHARS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; // there may be a method that can consolidate this somehow
const ALL_CHARS =[SPECIAL_CHARS, NUMERIC_CHARS, LOWERCASE_CHARS, UPPERCASE_CHARS];
var selectedCharacterTypes = [];

function limitCheck() {
  var userLimit = prompt("Please choose from 8 to 128 characters to include.");
  if (userLimit === null) {
    return userLimit;
  }
    if (typeof Number(userLimit) !== "number" || Object.is(Number(userLimit), NaN) === true) {
      alert("Please input a number between 8 and 128 to continue.");
      userLimit = limitCheck(); // sets userLimit to call the function and erases original "bad" returned value to empty
    } 
    if (userLimit < 8 || userLimit > 128) {
      alert("This number must be between 8 and 128 to continue.");
      userLimit = limitCheck(); // sets userLimit to call the function and erases original "bad" returned value to empty
    }
  return userLimit; // returns a value from the limitCheck function
}

function specialCheck() {
  var userSpecial = confirm("Would you like to include special characters?");
  if (userSpecial) {
    selectedCharacterTypes.push(ALL_CHARS[0]);
  }
}

function numericCheck() {
  var userNumeric = confirm("Would you like to include numbers?");
  if (userNumeric) {
    selectedCharacterTypes.push(ALL_CHARS[1]);
  }
}

function lowercaseCheck() {
  var userLowercase = confirm("Include lowercase letters?");
  if (userLowercase) {
    selectedCharacterTypes.push(ALL_CHARS[2]);
  }
}

function uppercaseCheck() {
  var userUppercase = confirm("Include uppercase letters?");
  if (userUppercase) {
    selectedCharacterTypes.push(ALL_CHARS[3]);
  }
}

// in case user mistakenly does not select any character type to be included in the password
function empty() {
  if (selectedCharacterTypes.length === 0) {
    alert("Password has no character types added. Please try again with at least one character type.");
    userCriteria();
  }
}

// calls functions where user sets a character quantity limit and selects character types to include
function userCriteria() {
  var userLimit = limitCheck(); // re-declares userLimit locally AND calls limitCheck to prompt the user to provide a returned value
  if (userLimit === null) {
    return;
  }
  specialCheck();
  numericCheck();
  lowercaseCheck();
  uppercaseCheck();
  empty();
  return userLimit;
}

function generatePassword(userLimit) {
  // for loop that randomly picks which array first and then randomly picks a character from it
  var randomCharType = [];
  var password = [];   // declares password as an empty array
  for (var i = 0; i < userLimit; i++) {   // randomly chooses an index location of selectedCharacterTypes up to the number of the userLimit
    randomCharType = Math.floor(Math.random() * selectedCharacterTypes.length); // picks a random character type from selectedCharacterTypes
    var randomizer = Math.floor(Math.random() * selectedCharacterTypes[randomCharType].length);
    password.push(selectedCharacterTypes[randomCharType][randomizer]); // gives a random index location from a random array of characters
  }
  password = password.join(""); // converts password from an array to a string
  return password; // returns a value from the generatePassword function
}

// Write password to the #password input
function writePassword() {
  var userLimit = userCriteria();
  var password = generatePassword(userLimit);  // re-declares password locally AND calls generatePassword to prompt the user to provide inputs
  var passwordText = document.querySelector("#password");
   passwordText.value = password;
   selectedCharacterTypes = []; // resets selectedCharacterTypes as an empty array (avoids infinite adding of characters in browser cache)
}

generateButton.addEventListener("click", writePassword);

// const copyPassword = document.querySelector("#password");
// const copyButton = document.getElementById("copy");


// VERSION 1 TEST: NOT FUNCTIONAL
// copyButton.addEventListener("click", (event) => {
//   var getPassword = document.getElementById("#password").textContent;
//   navigator.clipboard.writeText("#password");
// })

// VERSION 2 TEST: NOT FUNCTIONAL
// copyPassword.addEventListener("copy", (event) => {
//   var getPassword = document.getSelection();
//   event.clipboardData.setData("text/plain", selection.toString());
//   event.preventDefault();
// })