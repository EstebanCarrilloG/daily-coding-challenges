// Array Duplicates

/**
 * Given an array of integers, return an array of integers that appear more than once in the initial array, sorted in ascending order. If no values appear more than once, return an empty array.
 * Only include one instance of each value in the returned array.
 * @param {Array<number>} arr - The array of integers to search.
 * @returns {Array<number>} The array of duplicate integers, sorted in ascending order.
 */
export function findDuplicates(arr) {
  let newArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    let counter = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[i] === arr[j]) counter++;
    }
    if (counter === 1) newArr.push(arr[i]);
  }
  return newArr.sort((a, b) => a - b);
}
