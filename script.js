// Assignment Code
let generateBtn = document.getElementById("generate");

// Variables
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numeric = "0123456789";
const special = "!@#$%^&*?";
let characters = "";
let password = "";
let confirmLower;
let confirmUpper;
let confirmNumeric;
let confirmSpecial;

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.getElementById("password");
  passwordText.value = password;
}

// Concatenate user character selection to string
function generatePassword() {
  passwordLength = prompt("Choose your password length, between 8 and 128 characters");
  console.log(passwordLength !== null);
  if (passwordLength !== null) {
    while (!passwordLength || passwordLength < 8 || passwordLength > 128) {
      alert("You must choose a number between 8 and 128!");
      passwordLength = parseInt(
        prompt("Choose your password length, between 8 and 128 characters")
      );
    }
    confirmLower = confirm("Select OK to include lowercase letters");
    confirmUpper = confirm("Select OK to include UPPERCASE letters");
    confirmNumeric = confirm("Select OK to include numbers");
    confirmSpecial = confirm("Select OK to include special characters");
    while (!confirmLower && !confirmUpper && !confirmNumeric && !confirmSpecial) {
      alert("You must select at least one character type!");
      confirmLower = confirm("Select OK to include lowercase letters");
      confirmUpper = confirm("Select OK to include UPPERCASE letters");
      confirmNumeric = confirm("Select OK to include numbers");
      confirmSpecial = confirm("Select OK to include special characters");
    }
  }
  let characters = "";
  if (confirmLower) {
    characters += lowercase;
  } 
  if (confirmUpper) {
    characters += uppercase;
  }
  if (confirmNumeric) {
    characters += numeric;
  }
  if (confirmSpecial) {
    characters += special;
  }

  // Generate random password from user string
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    password += characters[Math.floor(Math.random() * characters.length)];
  }
  return password;
}

// Event listener
generateBtn.addEventListener("click", writePassword);