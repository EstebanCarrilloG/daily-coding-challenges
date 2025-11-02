// S P A C E J A M

/**
 * Given a string, remove all spaces from the string,
 * insert two spaces between every character, convert
 * all alphabetical letters to uppercase, and return
 * the result.
 * @param {string} s - The string to process.
 * @returns {string} The processed string.
 */
export function spaceJam(s) {
  let newString = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] == " ") continue;
    newString += s[i] + "  ";
  }

  return newString.toUpperCase().trim();
}
