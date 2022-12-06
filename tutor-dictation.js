// Assignment Code
// global variable definition
const numericChars =[0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const specialChars = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
const lowercaseChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const uppercaseChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


var generateBtn = document.querySelector("#generate");

function passwordOptions() {
  let passLength = prompt("Assign character length.");
  let specials = confirm("Would you like to include special characters?");
  let lowercase = confirm("Include lowercase characters?");
  let uppercase = confirm("Include uppercase characters?");
  let numeric = confirm("Include number characters?");
  let responses = {
    passLength,
    specials,
    lowercase,
    uppercase,
    numeric,
  } 
  return responses;
}
// passwordOptions();
// create 3 arrays to run for loop to randomly select characters based on pass length
// concat arrays 
// if specials concat arra

function generatePassword() {
  var allChars = [];
  var finalPass = [];
  var temp = []; // final pass = temp pass to guarantee to user that all characters asked for are present
  var userOptions = passwordOptions();
  console.log(userOptions);
  if (userOptions.specials) {
    allChars = allChars.concat(specialChars);
    temp.push(selectRandom(specialChars));
  }
  console.log(temp);
}
generatePassword();

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// if numeric, pass through selectRandom to choose a random number
function selectRandom(array) {
  var randomIndex = Math.floor(Math.random()*array.length);
  return array[randomIndex];
}
// writePassword();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
