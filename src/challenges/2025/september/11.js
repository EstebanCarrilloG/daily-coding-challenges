/*
Reverse Sentence

Given a string of words, return a new string with the words in reverse order. For example, the first word should be at the end of the returned string, and the last word should be at the beginning of the returned string.

In the given string, words can be separated by one or more spaces.
The returned string should only have one space between words.
*/

/**
 * Given a string of words, return a new string with the words in reverse order.
 * For example, the first word should be at the end of the returned string, and the last word should be at the beginning of the returned string.
 * In the given string, words can be separated by one or more spaces.
 * The returned string should only have one space between words.
 * @param {string} sentence - The input string of words.
 * @returns {string} - The string with the words in reverse order.
 */
export function reverseSentence(sentence) {
  return sentence.split(" ").reverse().join(" ").replace(/\s+/g, " ");
}
