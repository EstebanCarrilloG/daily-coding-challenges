//String Count
/**
 * Given two strings, determine how many times the second string appears in the first.
 * The pattern string can overlap in the first string. For example, "aaa" contains "aa" twice. The first two a's and the second two.
 * @param {string} text
 * @param {string} pattern
 * @returns {number} count of how many times pattern appears in text.
 */
export function count(text, pattern) {
  let regExp = new RegExp(`(?=(${pattern}))`, "g");
  return text.match(regExp)?.length ?? 0;
}
