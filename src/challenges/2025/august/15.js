// Jbelmud Text

/* Given a string, return a jumbled version of 
that string where each word is transformed 
using the following constraints: */

/*
 * The first and last letters of the words remain in place
 * All letters between the first and last letter are sorted alphabetically.
 * The input strings will contain no punctuation, and will be entirely lowercase.
 */

/**
 * Returns a jumbled version of a given string where each word is transformed
 * using the following constraints:
 * The first and last letters of the words remain in place
 * All letters between the first and last letter are sorted alphabetically.
 * The input strings will contain no punctuation, and will be entirely lowercase.
 * @param {string} text - The string to jumble.
 * @returns {string} The jumbled string.
 */
export function jbelmu(text) {
  const words = text.split(" ");
  let newString = "";

  for (let i = 0; i < words.length; i++) {
    let word = words[i].split("");

    let toSort = [];
    for (let e = 0; e < word.length; e++) {
      if (e === 0 || e === word.length - 1) continue;
      toSort.push(word[e]);
    }
    toSort.sort();
    word.splice(1, toSort.length, ...toSort);

    newString += word.join("") + " ";
  }

  return newString.trim();
}
