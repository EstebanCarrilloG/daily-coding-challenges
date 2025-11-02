import { removeDuplicates } from "../../../utils/index.js";
// Pangram
/**
 * Checks if a given sentence is a pangram for a set of letters.
 * A pangram is a sentence that uses all the letters in the given set at least once.
 * @param {string} sentence - The sentence to check.
 * @param {string} letters - The set of letters to check against.
 * @returns {boolean} True if the sentence is a pangram, false otherwise.
 */
export function isPangram(sentence, letters) {
  letters = letters.toLowerCase();
  sentence = sentence.toLowerCase();
  sentence = removeDuplicates(sentence);

  let coincidences = [];
  for (let i = 0; i < sentence.length; i++) {
    for (let j = 0; j < letters.length; j++) {
      if (sentence[i].match(/[\W]/g)) continue;
      if (sentence[i] !== letters[j]) {
        coincidences.push(sentence[i]);
        break;
      }
    }
  }
  return coincidences.sort().join("") === letters.split("").sort().join("");
}
