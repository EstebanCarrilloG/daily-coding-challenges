//Sum of Squares

/* Given a positive integer up to 1,000, return the sum of all the integers squared from 1 up to the number. */

/**
 * Returns the sum of the squares of all integers from 0 to n (inclusive).
 * @param {number} n - The upper limit of the range of numbers to sum.
 * @returns {number} The sum of the squares of all integers from 0 to n.
 */
export function sumOfSquares(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i ** 2;
  }
  return sum;
}
