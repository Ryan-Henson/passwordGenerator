let lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
let specialChar = "!@#$%^&*()".split("");
let numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function getPasswordOptions() {
  let passwordLength = prompt("How long would you like your password to be?")
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Must select a number between 8 and 128. Try again!")
    return
  }
  let wantsLower = confirm("Do you want to include lower case letters?");
  let wantsUpper = confirm("Do you want to include upper case letters?");
  let wantsSpecial = confirm("Do you want to include special characters?");
  let wantsNumber = confirm("Do you want to include numbers?");
  if (wantsLower === false && wantsUpper === false && wantsSpecial === false && wantsNumber === false) {
    alert("Please select at least one option.")
    return
  }
  let criteria = {
    length: passwordLength,
    lower: wantsLower,
    upper: wantsUpper,
    special: wantsSpecial,
    number: wantsNumber
  }
   return criteria
}

function getRandom(arr) {
 let randomIndex = Math.floor(Math.random()*arr.length)
 return arr[randomIndex]
}

function generatePassword() {
    let result = [];
    let possibleCharacters = [];
    let guaranteedCharacters = [];
    let options = getPasswordOptions();
}



var generateBtn = document.querySelector("#generate");


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


generateBtn.addEventListener("click", writePassword);
