//Targeted Sum

/* Given an array of numbers and an integer 
target, find two unique numbers in the array 
that add up to the target value. Return an 
array with the indices of those two numbers, 
or "Target not found" if no two numbers sum 
up to the target. */

/**
 * Finds the indices of two elements in an array that add up to a given target.
 * If such elements are found, returns an array of their indices. Otherwise, returns "Target not found".
 * @param {Array<number>} arr - The array to search.
 * @param {number} target - The target sum.
 * @returns {Array<number|string>} The indices of the two elements that add up to the target, or "Target not found" if no such elements are found.
 */
export function findTarget(arr, target) {
  const indices = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + arr[i + 1] === target) {
      indices.push(i, i + 1);
      break;
    }
  }
  return indices.length > 0 ? indices : "Target not found";
}
