/* 
Vowels and Consonants

Given a string, return an array with the number of vowels and number 
of consonants in the string.

Vowels consist of a, e, i, o, u in any case.
Consonants consist of all other letters in any case.
Ignore any non-letter characters.

For example, given "Hello World", return [3, 7].

*/

/**
 * Given a string, returns an array with the number of vowels and number of consonants in the string.
 * Vowels consist of a, e, i, o, u in any case.
 * Consonants consist of all other letters in any case.
 * Ignore any non-letter characters.
 * For example, given "Hello World", return [3, 7].
 * @param {string} str - The string to count vowels and consonants from.
 * @returns {Array} An array containing the number of vowels and the number of consonants in the given string.
 */
export function count2(str) {
  const vowels = "aeiou";
  let count = [0, 0];

  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/\w/)) {
      if (vowels.toLowerCase().includes(str[i])) {
        count[0]++;
        continue;
      }
      count[1]++;
    }
  }

  return count;
}
