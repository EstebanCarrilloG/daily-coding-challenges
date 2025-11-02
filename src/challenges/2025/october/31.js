/*
SpOoKy~CaSe

Given a string representing a variable name, convert it to "spooky case" using the following constraints:

Replace all underscores (_), and hyphens (-) with a tilde (~).
Capitalize the first letter of the string, and every other letter after that. Ignore the tilde character when counting. Make all other letters lowercase.
For example, given hello_world, return HeLlO~wOrLd.
*/

/**
 * Converts a string to "spooky case" by replacing all underscores and hyphens with a tilde, capitalizing the first letter and every other letter after that, and making all other letters lowercase.
 * @param {string} boo - The string to be converted to "spooky case"
 * @returns {string} - The converted string in "spooky case"
 */
export function spookify(boo) {
  boo = boo.replace(/[\-_]/g, "~");

  let newString = "";
  let j = 0;
  for (let i = 0; i < boo.length; i++) {
    boo[i].match(/\w/g) && j % 2 == 0
      ? (newString += boo[i].toUpperCase())
      : (newString += boo[i].toLowerCase());

    if (boo[i].match(/\w/g)) j++;
  }

  return newString;
}
