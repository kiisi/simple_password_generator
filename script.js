// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {

  let arr = []

  let specialCharactersOption = confirm("Should Generated password contain special characters: ")
  let numericCharactersOption = confirm("Should Generated password contain numeric characters: ")
  let lowerCasedCharactersOption = confirm("Should Generated password contain lowercase characters: ")
  let upperCasedCharactersOption = confirm("Should Generated password contain uppercase characters: ")
  
  if(specialCharactersOption){
    arr.push(specialCharacters)
  }
  if(numericCharactersOption){
    arr.push(numericCharacters)
  }
  if(lowerCasedCharactersOption){
    arr.push(lowerCasedCharacters)
  }
  if(upperCasedCharactersOption){
    arr.push(upperCasedCharacters)
  }

  return arr
}

// Shuffle array
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

// Function for getting a random element from an array
function getRandom(arr) {
  let arrLength = arr.length - 1
  let min = 0, max = arrLength;
  let random = Math.floor(Math.random() * (max + 1 - min)) + min
  let randomElement = arr[random]
  return randomElement
}

// Function to generate password with user input
function generatePassword() {
  let min = 10, max = 64;
  
  // generate a random number between min and max inclusively
  let random = Math.floor(Math.random() * (max + 1 - min)) + min

  let arr = getPasswordOptions()
  arr = shuffle(arr)
  

  let generatedString = "";

  let i = 0;
  while(i < random){

    let j = 0;
    while(j < arr.length){
      generatedString += getRandom(arr[j])
      j++
      i++
      arr = shuffle(arr)
    }
  }
  return generatedString
}
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


