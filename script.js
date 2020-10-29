let userImput;
let userNumber;
let userCharacter;
let userUpperCase;
let userLowerCase;
let imput;

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
let character ="!@#$%^&*()".split("");

let generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword)

function writePassword() {
    let password = generatePassword();
    let passwordText = document.querySelector("#password");       
    passwordText.value = password;           
}

function generatePassword() {
    userImput = parseInt(prompt("Choose a number between 8 and 128 for your password length"));
    if (!userImput) {
        alert("Please pick a number between 8 and 128");
    } else if (userImput < 8 || userImput > 128) {
        userImput = parseInt(prompt("The number must be between 8 and 128"));
    } else {
        userNumber = confirm("Would you like numbers?");
        userCharacter = confirm("Would you like special characters?");
        userUpperCase = confirm("Would you like Uppercase letters?");
        userLowerCase = confirm("Would you like Lowercase letters?");
    };
    if (!userCharacter && !userNumber && !userUpperCase && !userLowerCase) {
        imput = alert("At least one criteria must be chosen");
    }
    else if (userCharacter && userNumber && userUpperCase && userLowerCase) {
        imput = character.concat(number, lowerCase, upperCase);
    }
    else if (userCharacter && userNumber && userUpperCase) {
        imput = character.concat(number, upperCase);
    }
    else if (userCharacter && userNumber && userLowerCase) {
        imput = character.concat(number, lowerCase);
    }
    else if (userCharacter && userLowerCase && userUpperCase) {
        imput = character.concat(lowerCase, upperCase);
    }
    else if (userNumber && userLowerCase && userUpperCase) {
        imput = number.concat(lowerCase, upperCase);
    }
    else if (userCharacter && userNumber) {
        imput = character.concat(number);
    } 
    else if (userCharacter && userLowerCase) {
        imput = character.concat(lowerCase);
    } 
    else if (userCharacter && userUpperCase) {
        imput = character.concat(upperCase);
    }
    else if (userLowerCase && userNumber) {
        imput = lowerCase.concat(number);
    } 
    else if (userLowerCase && userUpperCase) {
        imput = lowerCase.concat(upperCase);
    } 
    else if (userNumber && userUpperCase) {
        imput = number.concat(upperCase);
    }
    else if (userCharacter) {
        imput = character;
    }
    else if (confirmNumber) {
        imput = number;
    }
    else if (userLowerCase) {
        imput = lowerCase;
    }
    else if (userUpperCase) {
        imput = upperCase;
    };
    let password = [];
    for (let i = 0; i < userImput; i++) {
        let pickInput = imput[Math.floor(Math.random() * imput.length)];
        password.push(pickInput);
    }
    let outputInfo = password.join("");
    return outputInfo;
}