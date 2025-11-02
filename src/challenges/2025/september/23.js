/*  
String Mirror

Given two strings, determine if the second string is a mirror of the first.

A string is considered a mirror if it contains the same letters in reverse order.
Treat uppercase and lowercase letters as distinct.
Ignore all non-alphabetical characters.
*/

/**
 * Checks if a given string is a mirror of another string.
 * A string is considered a mirror if it contains the same letters in reverse order.
 * Tries uppercase and lowercase letters as distinct.
 * Ignores all non-alphabetical characters.
 * @param {string} str1 - The first string to check.
 * @param {string} str2 - The second string to check.
 * @returns {boolean} True if the second string is a mirror of the first, false otherwise.
 */
export function isMirror(str1, str2) {
  return (
    str1.replace(/\s+/g, "") ===
    str2
      .split("")
      .map((e) => (e.match(/[.!?\-_\s]+/g) ? "" : e))
      .reverse()
      .join("")
  );
}
