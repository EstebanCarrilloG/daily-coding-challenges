/**
 * Finds the least common multiple (LCM) of two numbers.
 * The LCM is the smallest number that is a multiple of both the given numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The least common multiple of a and b.
 */
export function lcm(a, b) {
  let max = Math.max(a, b);
  let min = Math.min(a, b);
  let found = false;
  let number = 0;

  for (let i = 1; i < max * 10; i++) {
    for (let j = 1; j < min * 10; j++) {
      if (max * i === min * j) {
        number = max * i;
        found = true;
        break;
      }
    }
    if (found) break;
  }
  return number;
}
