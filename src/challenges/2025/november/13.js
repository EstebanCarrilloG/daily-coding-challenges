/**
 * Shifts an array by a given number of positions.
 * If the number is positive, the array is shifted to the right.
 * If the number is negative, the array is shifted to the left.
 * @param {Array} arr - The array to shift.
 * @param {number} n - The number of positions to shift the array.
 * @returns {Array} The shifted array.
 */
export function shiftArray(arr, n) {
  let arrCopy = [...arr];

  for (let i = 0; i < arr.length; i++) {
    let index = (i + n) % arr.length;
    if (n > 0) {
      arr[i] = arrCopy[index];
      continue;
    }
    arr[i] = arrCopy[index >= 0 ? index : arr.length + index];
  }

  return arr;
}
