/* 
Nth Prime

A prime number is a positive integer greater than 1 that is divisible only by 1 and itself. 
The first five prime numbers are 2, 3, 5, 7, and 11.

Given a positive integer n, return the nth prime number.
For example, given 5 return the 5th prime number: 11.

*/

/**
 * Returns the nth prime number.
 * @param {number} n - The number to retrieve the nth prime number.
 * @returns {number} The nth prime number.
 */
export function nthPrime(n) {
  let sum = 0;
  let numbers = [];

  let i = 2;

  do {
    for (let j = 2; j < n * 10; j++) {
      if (i % j !== 0) continue;
      sum++;
    }
    if (!(sum >= 2)) numbers.push(i);
    sum = 0;

    i++;
  } while (numbers.length <= n + 1);
  return numbers[n - 1];
}
