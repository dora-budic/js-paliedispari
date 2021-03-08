// Funzione
function palindromeWord(string) {
  var splitString = string.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");

  if (string == joinArray) {
    return "La parola inserita è palindroma";
  } else {
    return "La parola inserita non è palindroma";
  }
}

// Chiedere all’utente di inserire una parola
var word = prompt("Write one word");
var word = word.charAt(0).toLowerCase() + word.substring(1);

// Chiamo la funzione
var palindromeResult = palindromeWord(word);
document.getElementById('palindrome-word').innerHTML = word + ": " + palindromeResult;
