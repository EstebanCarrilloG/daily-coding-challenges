//Base Check

/**
 * Checks if a given string is a valid number in a given base.
 * The string may contain integers, and uppercase or lowercase characters.
 * The check should be case-insensitive.
 * The base can be any number 2-36.
 * A number is valid if every character is a valid digit in the given base.
 * Example of valid digits for bases:
 *   - Base 2: 0-1
 *   - Base 8: 0-7
 *   - Base 10: 0-9
 *   - Base 16: 0-9 and A-F
 *   - Base 36: 0-9 and A-Z
 * @param {string} n - The string to check
 * @param {number} base - The base to check against
 * @returns {boolean} True if the string is a valid number in the given base, false otherwise
 */
export function isValidNumber(n, base) {
  let digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let sum = 0;
  n = n.replace(/([a-z])/gi, (_, p1) => p1.toUpperCase());
  for (let i = 0; i < n.length; i++) {
    for (let j = 0; j < base; j++) {
      if (n[i] === digits[j]) {
        sum++;
        break;
      }
    }
  }
  return sum == n.length;
}
