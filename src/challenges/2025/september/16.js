/* Sentence Capitalizer

Given a paragraph, return a new paragraph where the first letter of each sentence is capitalized.

All other characters should be preserved.
Sentences can end with a period (.), one or more question marks (?), or one or more exclamation points (!). 

*/

/**
 * Given a paragraph, return a new paragraph where the first letter of each sentence is capitalized.
 * All other characters should be preserved.
 * Sentences can end with a period (.), one or more question marks (?), or one or more exclamation points (!).
 * @param {string} paragraph - The paragraph to capitalize.
 * @returns {string} - The capitalized paragraph.
 */
export function capitalize(paragraph) {
  let character = "";
  let paragraphArray = [];

  const isSentence = (w = "") => w.match(/[\w\s']+/g);
  const isSepararor = (s = "") => s.match(/[!?.]/g);

  for (let i = 0; i < paragraph.length; i++) {
    if (isSentence(paragraph[i])) {
      character += paragraph[i];
      if (isSepararor(paragraph[i + 1])) {
        paragraphArray.push(character);
        character = "";
      }
    }
    if (isSepararor(paragraph[i])) {
      character += paragraph[i];
      if (
        isSentence(paragraph[i + 1]) ||
        isSepararor(paragraph[i + 1]) ||
        paragraph[i + 1] === undefined
      ) {
        paragraphArray.push(character);
        character = "";
      }
    }
  }

  for (let j = 0; j < paragraphArray.length; j++) {
    if (isSentence(paragraphArray[j])) {
      let w = paragraphArray[j].split(" ");
      for (let k = 0; k < w.length; k++) {
        if (w[k].match(/\w/)) {
          w[k] = w[k]
            .split("")
            .map((e, i) => (i === 0 ? e.toUpperCase() : e))
            .join("");
          break;
        }
      }
      paragraphArray[j] = w.join(" ");
    }
  }

  return paragraphArray.join("");
}
