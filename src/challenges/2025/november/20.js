/**
 * Given a sentence, returns the longest word in the sentence.
 * @param {string} sentence - The sentence to search for the longest word.
 * @returns {string} The longest word in the sentence.
 */
export function longestWord(sentence) {
  sentence = sentence.replaceAll(/[.,!\?']/g, "");

  let words = sentence.split(" ");
  let longestWord = "";

  words.forEach((word) => {
    if (word.length > longestWord.length) {
      longestWord = word;
    } else if (word.length === longestWord.length) {
      return;
    }
  });

  return longestWord;
}
