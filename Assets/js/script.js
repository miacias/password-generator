// Assignment Code
var generateBtn = document.querySelector("#generate"); // variable called generateBtn looks at the HTML document using a querySelector and finds the ID "generate." ID "generate" is attached to the on-screen generate password BUTTON

const CHARS_LIMIT = [];
const ALL_CHARS = [SPECIAL_CHARS, NUMERIC_CHARS, LOWERCASE_CHARS, UPPERCASE_CHARS];
const SPECIAL_CHARS = [" ", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "?", "@", "[", "]", "\\", "^", "_", "{", "|", "}", "~"];
const NUMERIC_CHARS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const LOWERCASE_CHARS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const UPPERCASE_CHARS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; // there is a method that can consolidate this somehow

/* variables that need to be made:
--CONSTANT VARIABLES--
1. SPECIAL_CHARS array that carries all special characters
2. NUMERIC_CHARS array that carries all numerical characters
3. LOWERCASE_CHARS array that carries all lowercase characters
4. UPPERCASE_CHARS array that carries all uppercase characters
5. ALL_CHARS array that carries all possible characters in a nested array: specChars, numChars, lowChars, uppChars
6. CHARS_LIMIT minimum 8, maximum 128 characters allowed
--OBJECTS--
1. totalChars { } MIN_CHARS: 8, MAX_CHARS: 128
*/
function userCriteriaSelect() {
  var userLimit = prompt("Please choose from 8 to 128 characters to include.");
  var userSpecial = confirm("Would you like to include special characters?");
  var userNumeric = confirm("Would you like to include numbers?");
  var userLowercase = confirm("Include lowercase letters?");
  var userUppercase = confirm("Include uppercase letters?");
}
userCriteriaSelect();
/* activate or deactivate the sections of ALL_CHARS based on userCriteriaSelect, then multiply by CHARS_LIMIT to get correct number of characters allowed and selected.

var nameVariableSomething = Math.floor(Math.random()* ALL_CHARS[?????]); -> this could be too complicated
var randomSpecial = Math.floor(Math.random()* SPECIAL_CHARS[SPECIAL_CHARS.length]) 

IF STATEMENT: user clicks through prompt array choices, add or do not add array to possible character list (4 IFs needed)
*/

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); // the event listener watches "click" on the generateBtn for when it is clicked, THEN writePassword is called

