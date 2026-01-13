/**
 * Returns a string of length 100, repeating the given string
 * until the desired length is reached.
 *
 * @param {string} chars - The string to repeat.
 * @returns {string} A string of length 100, composed of the given string repeated as necessary.
 */
export function oneHundred(chars) {
  let times = Math.ceil(100 / chars.length);
  return chars.repeat(times).slice(0, 100);
}
