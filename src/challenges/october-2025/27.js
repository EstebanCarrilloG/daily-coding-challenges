/*

Integer Sequence

Given a positive integer, return a string with all of the integers from 1 up to, and including, the given number, in numerical order.

For example, given 5, return "12345".
*/

/**
 * Returns a string with all of the integers from 1 up to, and including, the given number, in numerical order.
 * @param {number} n - The given number.
 * @returns {string} A string with all of the integers from 1 up to, and including, the given number, in numerical order.
 */
export function sequence(n) {
  let s = "";

  for (let i = 1; i <= n; i++) s += i;

  return s;
}
