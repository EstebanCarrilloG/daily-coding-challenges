// Speak Wisely, You Must

/**
 * Given a sentence, return a version of it that sounds like advice from a wise teacher using the following rules:
 * Words are separated by a single space.
 * Find the first occurrence of one of the following words in the sentence: "have", "must", "are", "will", "can"
 * Move all words before and including that word to the end of the sentence and:
 *   Preserve the order of the words when you move them.
 *   Make them all lowercase.
 *   And add a comma and space before them.
 * Capitalize the first letter of the new first word of the sentence.
 * All given sentences will end with a single punctuation mark. Keep the original punctuation of the sentence and move it to the end of the new sentence.
 * Return the new sentence, make sure there's a single space between each word and no spaces at the beginning or end of the sentence.
 * For example, given "You must speak wisely." return "Speak wisely, you must."
 * @param {string} sentence - The sentence to transform.
 * @returns {string} The transformed sentence.
 */
export function wiseSpeak(sentence) {
  const words = ["have", "must", "are", "will", "can"];
  let sentenceString = sentence.split(" ");
  let lastChar = sentence[sentence.length - 1];
  let arr = [];
  for (let i = 0; i < sentenceString.length; i++) {
    arr.push(sentenceString[i]);
    if (words.indexOf(sentenceString[i]) !== -1) break;
  }
  let firstHalf = sentenceString
    .slice(arr.length)
    .map((e, i) => {
      if (i == 0)
        return e
          .split("")
          .map((s) => (s === e[0] ? s.toUpperCase() : s))
          .join("");
      return e;
    })
    .join(" ")
    .replace(lastChar, ",");
  let secondHalf = arr
    .map((e, i) => {
      if (i == 0)
        return e
          .split("")
          .map((s) => (s === e[0] ? s.toLowerCase() : s))
          .join("");
      return e;
    })
    .join(" ")
    .concat(lastChar);
  return firstHalf + " " + secondHalf;
}
