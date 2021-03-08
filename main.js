// PRIMO ESERCIZIO

// Chiedere all’utente di inserire una parola
var word = prompt("Write one word");
var word = word.charAt(0).toLowerCase() + word.substring(1);
console.log(word);

// Chiamo la funzione
var palindromeResult = palindromeWord(word);

// Scrivere il risultato
document.getElementById('palindrome-word').innerHTML = word + ": " + palindromeResult;

// Funzione
function palindromeWord(string) {
  var splitString = string.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");

  if (string == joinArray) {
    return "Inserted word is palindrome.";
  } else {
    return "Inserted word is not palindrome.";
  }
}


// SECONDO ESERCIZIO

// Chiedere all'utente pari o dispari
var control1 = true;
while (control1) {
  var numberType = prompt("Odd or even?");
  if (isNaN(numberType)) {
    control1 = false;
  } else {
    console.log("You have to write the word 'Odd' or 'Even'!!");
  }
}

var numberType = numberType.charAt(0).toUpperCase() + numberType.substring(1);
document.getElementById('numer-type').innerHTML += numberType;

// Chiedere all'utente un numero tra 1 e 5
var control2 = true;
while (control2) {
  var userNumber = parseInt(prompt("Write one number between 1 and 5:"));
  if (userNumber > 0 && userNumber < 5) {
    control2 = false;
  } else {
    console.log("You have to choose a number between 1 and 5!!");
  }
}

document.getElementById('user').innerHTML += userNumber;

// Chiamo la funzione random
var computerNumber = randomNumber(1,5);
document.getElementById('computer').innerHTML += computerNumber;

// Chiamo la funzione sum
var sumResult = sumType(userNumber, computerNumber);
document.getElementById('sum').innerHTML = "The sum of " + userNumber + " and " + computerNumber + " is " + sumResult + " number.";

// Scrivere chi ha vinto
if (numberType == sumResult) {
  document.getElementById('winner').innerHTML = "User has won!";
} else {
  document.getElementById('winner').innerHTML = "Computer has won!";
}

// Funzione - genera numero random
function randomNumber(min,max) {
  var genNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return genNumber;
}

// Funzione - controlla se somma è pari o dispari
function sumType(number1,number2) {
  var sum = number1 + number2;

  if (sum%2) {
    return "Odd";
  } else {
    return "Even";
  }
}
