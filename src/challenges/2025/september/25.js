// 2nd Largest
//Given an array, return the second largest distinct number.

/**
 * Given an array, return the second largest distinct number.
 * @param {Array<number>} arr - An array of numbers.
 * @returns {number} The second largest distinct number in the array.
 */
export function secondLargest(arr) {
  return arr.sort((a, b) => b - a).filter((n) => n !== arr[0])[0];
}
