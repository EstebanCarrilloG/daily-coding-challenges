// Unnatural Prime
/**
 * Checks if a given number is an unnatural prime.
 * An unnatural prime is a prime number that is not natural.
 * A prime number is a number that is divisible only by itself and 1.
 * @param {number} n - The number to check.
 * @returns {boolean} True if the number is an unnatural prime, false otherwise.
 */
export function isUnnaturalPrime(n) {
  if (n >= -1 && n <= 1) return false;

  let j = 0;

  if (n > 0) {
    for (let i = 1; i < n + 1; i++) {
      n % i == 0 && j++;
      if (j > 2) break;
    }
  }

  if (n < 0) {
    for (let i = -1; i > n; i--) {
      n % i == 0 && j++;
      if (j > 2) break;
    }
  }

  if (j > 2) return false;

  return true;
}
