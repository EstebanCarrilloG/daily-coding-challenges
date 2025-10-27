/* 
Acronym Builder

Given a string containing one or more words, return an acronym of the words using the following constraints:

The acronym should consist of the first letter of each word capitalized, unless otherwise noted.
The acronym should ignore the first letter of these words unless they are the first word of the given string: a, for, an, and, by, and of.
The acronym letters should be returned in the order they are given.
The acronym should not contain any spaces.
*/

/**
 * Given a string containing one or more words, returns an acronym of the words using the following constraints:
 * The acronym should consist of the first letter of each word capitalized, unless otherwise noted.
 * The acronym should ignore the first letter of these words unless they are the first word of the given string: a, for, an, and, by, and of.
 * The acronym letters should be returned in the order they are given.
 * The acronym should not contain any spaces.
 * @param {string} str - The string to generate an acronym from.
 * @returns {string} The acronym of the given string.
 */
export function buildAcronym(str) {
  let ignoredWords = ["a", "for", "an", "and", "by", "of"];

  return str
    .split(" ")
    .map((e) => (ignoredWords.includes(e) ? "" : e[0].toUpperCase()))
    .join("");
}
