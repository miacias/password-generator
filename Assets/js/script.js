// Assignment Code
var generateButton = document.querySelector("#generate");
var copyPassword = document.querySelector("#card-body");
const SPECIAL_CHARS = [" ", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "?", "@", "[", "]", "\\", "^", "_", "{", "|", "}", "~"];
const NUMERIC_CHARS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const LOWERCASE_CHARS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const UPPERCASE_CHARS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; // there may be a method that can consolidate this somehow
const ALL_CHARS =[SPECIAL_CHARS, NUMERIC_CHARS, LOWERCASE_CHARS, UPPERCASE_CHARS];
var selectedCharacters = [];

function limitCheck() {
  var userLimit = prompt("Please choose from 8 to 128 characters to include.");
  // if (typeof userLimit === Object(null)) {
  //   return;
  // }
    if (typeof Number(userLimit) !== "number" || Object.is(Number(userLimit), NaN) === true) { // source https://www.samanthaming.com/tidbits/21-how-to-test-nan/ and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
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
    // selectedCharacters = selectedCharacters.concat(SPECIAL_CHARS);
    selectedCharacters.push(ALL_CHARS[0]);
  }
  // console.log(userSpecial);
}

function numericCheck() {
  var userNumeric = confirm("Would you like to include numbers?");
  if (userNumeric) {
    // selectedCharacters = selectedCharacters.concat(NUMERIC_CHARS);
    selectedCharacters.push(ALL_CHARS[1]);
  }
  // console.log(userNumeric);
}

function lowercaseCheck() {
  var userLowercase = confirm("Include lowercase letters?");
  if (userLowercase) {
    // selectedCharacters = selectedCharacters.concat(LOWERCASE_CHARS);
    selectedCharacters.push(ALL_CHARS[2]);
  }
  // console.log(userLowercase);
}

function uppercaseCheck() {
  var userUppercase = confirm("Include uppercase letters?");
  if (userUppercase) {
    // selectedCharacters = selectedCharacters.concat(UPPERCASE_CHARS);
    selectedCharacters.push(ALL_CHARS[3]);
  }
  // console.log(userUppercase);
}

// in case user mistakenly does not select any character type to be included in the password
function empty() {
  if (selectedCharacters.length === 0) {
    alert("Password has no character types added. Please try again with at least one character type.");
    userCriteria();
  }
}

// calls functions where user sets a character quantity limit and selects character types to include
function userCriteria() {
  var userLimit = limitCheck(); // re-declares userLimit locally AND calls limitCheck to prompt the user to provide a returned value
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
  for (var i = 0; i < userLimit; i++) {   // randomly chooses an index location of selectedCharacters up to the number of the userLimit
    randomCharType = Math.floor(Math.random() * selectedCharacters.length);
    console.log(randomCharType = Math.floor(Math.random() * selectedCharacters.length))

    // make a variable where the randomCharType can push its array contents into for selection
    ALL_CHARS[randomCharType]

    var randomizer = Math.floor(Math.random() * randomCharType.length);
    console.log(randomizer = Math.floor(Math.random() * randomCharType.length));
    password.push(selectedCharacters[randomizer]);
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
  selectedCharacters = []; // resets selectedCharacters as an empty array (avoids infinite adding of characters in browser cache)
}

// Add event listener to generate button
generateButton.addEventListener("click", writePassword); // the event listener watches "click" on the generateBtn for when it is clicked, THEN writePassword is called, which begins generatePassword

// copyPassword.addEventListener("click", (event) => {
//   var content = document.getElementById("content-copy").textContent;
// })