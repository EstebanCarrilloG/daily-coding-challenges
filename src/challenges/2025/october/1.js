//Binary to Decimal
/**
 * Converts a binary string to a decimal number.
 * @param {string} binary - The binary string to convert.
 * @returns {number} The decimal number equivalent to the binary string.
 */
export function toDecimal(binary) {
  let sum = 0;
  let n = binary.length - 1;
  for (let i = n; i > -1; i--) {
    sum += binary[n - i] * 2 ** i;
  }
  return sum;
}
