/* 
Word Counter
Given a sentence string, return the number of words 
that are in the sentence.

Words are any sequence of non-space characters 
and are separated by a single space.
*/

/**
 * Returns the number of words in a given sentence.
 * Words are any sequence of non-space characters and are separated by a single space.
 * @param {string} sentence - The sentence to count words from.
 * @returns {number} The number of words in the sentence.
 */
export function countWords(sentence) {
  return sentence.split(" ").length;
}
