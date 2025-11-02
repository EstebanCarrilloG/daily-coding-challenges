//Longest Word

/**
 * Given a sentence, returns the longest word in the sentence.
 * @param {string} sentence - The sentence to search for the longest word.
 * @returns {string} The longest word in the sentence.
 */
export function getLongestWord(sentence) {
  let arr = sentence.replace(".", "").split(" ");

  let longestWord = "";

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longestWord.length) {
      longestWord = arr[i];
    }
  }
  return longestWord;
}
