let generateBtn = document.querySelector("#generate");

function generatePassword() {
  let userImput;
  let userNumber;
  let userCharacter;
  let userUpperCase;
  let userLowerCase;
  let imput = [];

  let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  let character = "!@#$%^&*()".split("");
  userImput = parseInt(
    prompt("Choose a number between 8 and 128 for your password length")
  );
  if (!userImput) {
    alert("Please pick a number between 8 and 128");
    return "";
  }
  if (userImput < 8 || userImput > 128) {
    alert("The number must be between 8 and 128");
    return "";
  }
  userNumber = confirm("Would you like numbers?");
  userCharacter = confirm("Would you like special characters?");
  userUpperCase = confirm("Would you like Uppercase letters?");
  userLowerCase = confirm("Would you like Lowercase letters?");

  if (!userCharacter && !userNumber && !userUpperCase && !userLowerCase) {
    alert("At least one criteria must be chosen");
    return "";
  }
  if (userNumber) {
    imput = imput.concat(number);
  }
  if (userCharacter) {
    imput = imput.concat(character);
  }
  if (userUpperCase) {
    imput = imput.concat(upperCase);
  }
  if (userLowerCase) {
    imput = imput.concat(lowerCase);
  }
  let password = [];
  for (let i = 0; i < userImput; i++) {
    let pickInput = imput[Math.floor(Math.random() * imput.length)];
    password.push(pickInput);
  }
  let outputInfo = password.join("");
  return outputInfo;
}
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword);
