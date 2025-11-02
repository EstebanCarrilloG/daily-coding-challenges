/* 
Digits vs Letters

Given a string, return "digits" if the string has more digits than letters, "letters" if it has more letters than digits, and "tie" if it has the same amount of digits and letters.

Digits consist of 0-9.
Letters consist of a-z in upper or lower case.
Ignore any other characters.
*/

/**
 * Given a string, returns "digits" if the string has more digits than letters, "letters" if it has more letters than digits, and "tie" if it has the same amount of digits and letters.
 * Digits consist of 0-9.
 * Letters consist of a-z in upper or lower case.
 * Ignore any other characters.
 * @param {string} str - The string to check.
 * @returns {string} - A string indicating whether the string has more digits or letters.
 */
export function digitsOrLetters(str) {
  let numbers = 0;
  let letters = 0;
  for (let i = 0; i < str.length; i++) {
    isNaN(str[i]) ? letters++ : numbers++;
  }
  return numbers > letters ? "digits" : letters > numbers ? "letters" : "tie";
}
