/**
 * Given a sentence string, return an array with the number of occurrences of each letter in the sentence.
 * Ignore any non-letter characters.
 * For example, given "Hello World", return ["h 1", "e 1", "l 3", "o 2", "w 1", "r 1", "d 1"].
 * @param {string} sentence - The sentence to count letters from.
 * @returns {Array} An array containing the number of occurrences of each letter in the given sentence.
 */
export function countCharacters(sentence) {
  sentence = sentence.replace(/[^a-zA-Z]/g, "").toLowerCase();
  let lettersObject = {};

  for (let i = 0; i < sentence.length; i++) {
    let count = 0;
    let letter = sentence[i];
    for (let j = sentence.length; j >= 0; j--) {
      if (letter === sentence[j]) {
        count++;
        lettersObject = { ...lettersObject, [letter]: count };
      }
    }
  }

  return Object.keys(lettersObject)
    .map((key) => {
      return `${key} ${lettersObject[key]}`;
    })
    .sort();
}
