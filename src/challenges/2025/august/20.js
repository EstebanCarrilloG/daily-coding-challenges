//3 Strikes
/* Given an integer between 1 and 10,000, 
return a count of how many numbers from 1 
up to that integer whose square contains 
at least one digit 3. */

/**
 * Returns the number of squares between 1 and n (inclusive) that have a digit 3 in them.
 * @param {number} n - The upper limit of the range of numbers to check.
 * @returns {number} The number of squares between 1 and n that have a digit 3 in them.
 */
export function squaresWithThree(n) {
  let count = 0;
  for (let i = 1; i < n; i++) {
    let square = i ** 2;
    square
      .toString()
      .split("")
      .map((n) => n == "3")
      .indexOf(true) !== -1 && count++;
  }
  return count;
}
