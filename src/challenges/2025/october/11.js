// Hex to Decimal

/**
 * Converts a hexadecimal string to a decimal number.
 * @param {string} hex - The hexadecimal string to convert.
 * @returns {number} The decimal number equivalent to the hexadecimal string.
 */
export function hexToDecimal(hex) {
  let hexValues = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
  let decimal = 0;

  for (let i = hex.length - 1; i >= 0; i--) {
    for (let j = 0; j < hexValues.length; j++) {
      if (hex[i] === hexValues[j]) {
        decimal += j * 16 ** [hex.length - i - 1];
        break;
      }
    }
  }
  return decimal;
}