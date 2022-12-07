// Assignment Code
var generateBtn = document.querySelector("#generate"); // variable called generateBtn looks at the HTML document using a querySelector and finds the ID "generate." ID "generate" is attached to the on-screen generate password BUTTON

const CHARS_LIMIT = [];
const SPECIAL_CHARS = [" ", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "?", "@", "[", "]", "\\", "^", "_", "{", "|", "}", "~"];
const NUMERIC_CHARS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const LOWERCASE_CHARS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const UPPERCASE_CHARS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; // there may be a method that can consolidate this somehow
const ALL_CHARS = [SPECIAL_CHARS, NUMERIC_CHARS, LOWERCASE_CHARS, UPPERCASE_CHARS];

/*
--OBJECTS--
1. totalChars { } MIN_CHARS: 8, MAX_CHARS: 128
*/

function userCriteria() {
  var userLimit = prompt("Please choose from 8 to 128 characters to include.");
  var userSpecial = confirm("Would you like to include special characters?");
  var userNumeric = confirm("Would you like to include numbers?");
  var userLowercase = confirm("Include lowercase letters?");
  var userUppercase = confirm("Include uppercase letters?");
}
userCriteria();
/* activate or deactivate the sections of ALL_CHARS based on userCriteriaSelect, then multiply by CHARS_LIMIT to get correct number of characters allowed and selected.

var nameVariableSomething = Math.floor(Math.random()* ALL_CHARS[?????]); -> this could be too complicated
var randomSpecial = Math.floor(Math.random()* SPECIAL_CHARS[SPECIAL_CHARS.length]) 

math.floor === round down to nearest whole number
math.random === randomize 0 to 0.99999repeating
CHARS[CHARS.length] === select character based on the lenfth of the character list?

if userSpecial true, add randomSpecial. else if userNumeric is true, add randomNumeric.

*/
var selectedCharacters

function userSelections() {
  if (128 >= userLimit >= 8) {
    selectedLimit = userLimit
  } else {
    userLimit = prompt("Please only choose from 8 to 128 characters to include.");
  }
  if (userSpecial) {
    selectedCharacters.push(ALL_CHARS[0]);
  } 
  if (userNumeric) {
    selectedCharacters.push(ALL_CHARS[1]);
  } 
  if (userLowercase) {
    selectedCharacters.push(ALL_CHARS[2]);
  } 
  if (userUppercase) {
    selectedCharacters.push(ALL_CHARS[3]);
  } else {
    alert("No character-type selected. Please try again and select at least one type of character."); // insert failure case (in case user says "no" to everything)
  }
}
userSelections();

// need to add variable selectedLimit as well as creating CHARS_LIMIT definition



function generatePassword() {
  for (var i = 0; i = selectedLimit; i++) {

  }
  // use Math to randomly choose characters from selectedCharacters
  // Math.floor = round down to nearest whole
  // Math.random() = randomizer from 0 to 0.9999
}
generatePassword();

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); // the event listener watches "click" on the generateBtn for when it is clicked, THEN writePassword is called

