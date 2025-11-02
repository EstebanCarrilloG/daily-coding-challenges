//Decimal to Binary
/**
 * Converts a decimal number to a binary string.
 * @param {number} decimal - The decimal number to convert.
 * @returns {string} The binary string equivalent to the decimal number.
 */
export function toBinary(decimal) {
  let remainder = [];
  let result = decimal;

  while (result > 0) {
    remainder.push(result % 2);
    result = Math.floor(result / 2);
  }
  return remainder.reverse().join("");
}
