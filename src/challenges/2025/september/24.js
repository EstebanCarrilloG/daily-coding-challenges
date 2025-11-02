// Perfect Square
// Given an integer, determine if it is a perfect square.

/**
 * Checks if a given number is a perfect square.
 * A perfect square is a number that can be expressed as the square of an integer.
 * @param {number} n - The number to check.
 * @returns {boolean} True if the number is a perfect square, false otherwise.
 */
export function isPerfectSquare(n) {
  for (let i = 0; i < n + 1; i++) {
    if (i * i === n) {
      return true;
    }
  }
  return false;
}
