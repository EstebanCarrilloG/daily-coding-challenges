/* 
Missing Numbers

Given an array of integers from 1 to n, inclusive, 
return an array of all the missing integers between 1 and n 
(where n is the largest number in the given array).

The given array may be unsorted and may contain duplicates.
The returned array should be in ascending order.
If no integers are missing, return an empty array.
*/

/**
 * Finds all the missing integers between 1 and n, inclusive, in an array of integers from 1 to n.
 * The given array may be unsorted and may contain duplicates.
 * The returned array should be in ascending order.
 * If no integers are missing, return an empty array.
 * @param {Array<number>} arr - The array of integers from 1 to n.
 * @returns {Array<number>} The array of missing integers between 1 and n, inclusive.
 */
export function findMissingNumbers(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  let newArr = [];

  for (let i = min; i < max; i++) {
    if (!arr.includes(i)) newArr.push(i);
  }
  return newArr;
}
