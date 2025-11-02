//Hex Generator

/**
 * Generates a random hexadecimal (hex) color code that is dominant in the given color.
 * The function should handle "red", "green", or "blue" as an input argument.
 * If the input is not one of those, the function should return "Invalid color".
 * The function should return a random six-character hex color code where the input color value is greater than any of the others.
 * @param {string} color - The color to generate a hex color code for.
 * @returns {string} - A random six-character hex color code where the input color value is greater than any of the others.
 */
export function generateHex(color) {
  switch (color) {
    case "red":
      return "FF" + getRandomHexChars(4);
    case "green":
      return getRandomHexChars(2) + "FF" + getRandomHexChars(2);
    case "blue":
      return getRandomHexChars(4) + "FF";
    default:
      return "Invalid color";
  }
}

/**
 * Generates a specified number of random hexadecimal characters.
 * @param {number} number - The number of random hexadecimal characters to generate.
 * @returns {string} - A string of the specified number of random hexadecimal characters.
 */
function getRandomHexChars(number) {
  let hexChars = "0123456789ABCDEF";
  let chars = "";
  for (let i = 0; i < number; i++) {
    chars += hexChars[Math.floor(Math.random() * hexChars.length)];
  }
  return chars;
}
