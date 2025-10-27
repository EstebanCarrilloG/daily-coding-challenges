/*
Array Diff

Given two arrays with strings values, return a new array containing all the values that appear in only one of the arrays.

The returned array should be sorted in alphabetical order.
*/

/**
 * Given two arrays with strings values, return a new array containing all the values that appear in only one of the arrays.
 * The returned array should be sorted in alphabetical order.
 * @param {Array<string>} arr1 - The first array.
 * @param {Array<string>} arr2 - The second array.
 * @returns {Array<string>} The new array containing values that appear in only one of the arrays.
 */
export function arrayDiff(arr1, arr2) {
  let arr = [];

  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) arr.push(arr1[i]);
  }
  for (let j = 0; j < arr2.length; j++) {
    if (!arr1.includes(arr2[j])) arr.push(arr2[j]);
  }

  return arr.sort();
}
