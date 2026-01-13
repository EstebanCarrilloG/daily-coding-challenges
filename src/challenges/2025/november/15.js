/**
 * Finds the greatest common divisor (gcd) of two numbers.
 * The gcd of two numbers is the largest number that divides both without leaving a remainder.
 * @param {number} x - The first number.
 * @param {number} y - The second number.
 * @returns {number} The greatest common divisor of x and y.
 */
export function gcd(x, y) {
  let temp = 0;
  let largestNumber = 0;
  let found = false;

  for (let i = x; i >= 1; i--) {
    if (x % i === 0) temp = i;
    for (let j = y; j >= 1; j--) {
      if (y % i === 0 && temp === j && i === j) {
        largestNumber = i;
        found = true;
        break;
      }
    }
    if (found) break;
  }
  return largestNumber;
}
