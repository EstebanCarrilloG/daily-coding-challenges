/**
 * Converts an integer to a Roman numeral.
 * @param {number} num - The number to convert.
 * @returns {string} - The Roman numeral representation of the number.
 */

export function toRoman(num) {
  const romanNumbers = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];

  if (num == 0) return "";

  for (let i = 0; i < romanNumbers.length; i++) {
    const [symbol, value] = romanNumbers[i];
    if (num >= value) {
      return symbol + toRoman(num - value);
    }
  }
}
