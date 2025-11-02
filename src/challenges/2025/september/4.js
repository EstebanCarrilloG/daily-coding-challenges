/*  
Vowel Repeater

Given a string, return a new version of the string where each vowel 
is duplicated one more time than the previous vowel you encountered. 
For instance, the first vowel in the sentence should remain unchanged. 
The second vowel should appear twice in a row. The third vowel should 
appear three times in a row, and so on.

  * The letters a, e, i, o, and u, in either uppercase or lowercase, are considered vowels.
  * The original vowel should keeps its case.
  * Repeated vowels should be lowercase.

All non-vowel characters should keep their original case.
*/

/**
 * Given a string, returns a new version of the string where each vowel is duplicated one more time than the previous vowel you encountered.
 * @param {string} str - The string to repeat vowels in.
 * @returns {string} The string with vowels repeated.
 */
export function repeatVowels(str) {
  let vowels = "aeiouAEIOU";
  let counter = 0;
  let str2 = "";

  for (let i = 0; i < str.length; i++) {
    str2 += str[i];
    for (let j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) {
        if (counter > 0) {
          str2 += vowels[j].repeat(counter).toLowerCase();
        }
        counter++;
      }
    }
  }

  return str2;
}
