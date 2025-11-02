//Factorializer

/**
 * Returns the factorial of a given number.
 * The factorial of a number is the product of all positive integers less than or equal to that number.
 * @param {number} n - The number to calculate the factorial of.
 * @returns {number} The factorial of the given number.
 */
export function factorial(n) {
  if (n == 0) n = 1;
  let j = n;
  for (let i = n; i > 1; i--) {
    j *= i - 1;
  }

  return j;
}
