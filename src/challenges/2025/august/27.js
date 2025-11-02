// Unorder of Operations

/**
 * Applies the given operators to the numbers sequentially from left-to-right,
 * repeating the operations as needed until all numbers are used.
 * Returns the final result.
 *
 * @param {number[]} numbers - The array of numbers to operate on.
 * @param {string[]} operators - The array of string operators to apply to the numbers.
 * @returns {number} - The result of the operations.
 */
export function evaluate(numbers, operators) {
  let values = [];
  let j = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (i == 0) {
      values.push(numbers[i]);
      continue;
    }
    values.push(operators[j] + numbers[i]);
    j++;
    j >= operators.length && (j = 0);
  }

  let result = 0;
  for (let x = 0; x < values.length; x++) result = eval(result + values[x]);

  return result;
}
