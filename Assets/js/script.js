// Assignment Code
var generateBtn = document.querySelector("#generate"); // variable called generateBtn looks at the HTML document using a querySelector and finds the ID "generate." ID "generate" is attached to the on-screen generate password BUTTON

const CHARS_LIMIT = (128 >= Math.floor(Number) >= 8);
const SPECIAL_CHARS = [" ", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "?", "@", "[", "]", "\\", "^", "_", "{", "|", "}", "~"];
const NUMERIC_CHARS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const LOWERCASE_CHARS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const UPPERCASE_CHARS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; // there may be a method that can consolidate this somehow
const ALL_CHARS = [SPECIAL_CHARS, NUMERIC_CHARS, LOWERCASE_CHARS, UPPERCASE_CHARS];

// User is provided password criteria
function userCriteria() {
  var userLimit = prompt("Please choose from 8 to 128 characters to include.");
  if (userLimit !== CHARS_LIMIT) {
    userLimit = prompt("This number must be between 8 and 128 to continue. Please choose from 8 to 128 characters to include.");
  } else {
    return userCriteria();
  }
  var userSpecial = confirm("Would you like to include special characters?");
  if (userSpecial) {
    selectedCharacters.push(ALL_CHARS[0]);
  } 
  var userNumeric = confirm("Would you like to include numbers?");
  if (userNumeric) {
    selectedCharacters.push(ALL_CHARS[1]);
  } 
  var userLowercase = confirm("Include lowercase letters?");
  if (userLowercase) {
    selectedCharacters.push(ALL_CHARS[2]);
  } 
  var userUppercase = confirm("Include uppercase letters?");
  return userLimit;
  if (userUppercase) {
    selectedCharacters.push(ALL_CHARS[3]);
  }
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

// var selectedCharacters

//   } else {
//     alert("No character-type selected. Please try again and select at least one type of character."); // insert failure case (in case user says "no" to everything)


function generatePassword() {
  for (var i = 0; i = selectedLimit; i++) {
    Math.floor(Math.random() * selectedCharacters) * userLimit
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

