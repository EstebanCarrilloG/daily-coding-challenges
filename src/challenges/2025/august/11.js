//Vowel Balance

/* Given a string, determine whether the number of vowels 
in the first half of the string is equal to the number of 
vowels in the second half. */

/**
 * Given a string, return true if the number of vowels in the first half of the string
 * is equal to the number of vowels in the second half of the string, and false otherwise.
 * @param {string} s - The string to check.
 * @returns {boolean} True if the number of vowels in the first half of the string is equal to the number of vowels in the second half, and false otherwise.
 */
export function isBalanced(s) {
  s = s.toLowerCase();
  let stringHalf = s.length / 2;
  let firstHalfVowels = 0;
  let lastHalfVowels = 0;
  const vowels = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < stringHalf; i++) {
    //console.log(s[i])
    vowels.find((e) => e == s[i]) !== undefined && firstHalfVowels++;
  }
  for (let i = s.length - 1; i > stringHalf - 1; i--) {
    //console.log(i)
    vowels.find((e) => e == s[i]) !== undefined && lastHalfVowels++;
  }

  return firstHalfVowels === lastHalfVowels;
}
