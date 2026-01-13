/*************  ✨ Windsurf Command ⭐  *************/
/**
 * Returns an array of strings from 1 to n, inclusive, where each number is
 * replaced with "Fizz" if it is divisible by 3, "Buzz" if it is divisible by
 * 5, and "FizzBuzz" if it is divisible by both 3 and 5.
 * @param {number} n - The upper limit of the range of numbers to check.
 * @returns {Array<string>} The array of strings from 1 to n, inclusive, with the
 * given replacements.
 */
/*******  3cb131bd-26ef-425d-b652-ef95b86e847e  *******/
export function fizzBuzz(n) {
  let arr = [];

  for (let i = 1; i <= n; i++) {
    arr.push(
      i % 3 === 0 && i % 5 === 0
        ? "FizzBuzz"
        : i % 3 === 0
        ? "Fizz"
        : i % 5 === 0
        ? "Buzz"
        : i
    );
  }

  return arr;
}
