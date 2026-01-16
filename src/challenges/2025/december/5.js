/**
 * Returns an array of elements that appear in either arr1 or arr2, but not in both.
 * The returned array does not contain duplicate values.
 * @param {Array} arr1 - The first array.
 * @param {Array} arr2 - The second array.
 * @returns {Array} The array of unique elements in either arr1 or arr2.
 */
export function difference(arr1, arr2) {
  let newArr = arr1.concat(arr2);

  for (let i = 0; i < newArr.length; i++) {
    for (let j = newArr.length - 1; j > i; j--) {
      if (newArr[i] === newArr[j]) {
        newArr[i] = undefined;
        newArr[j] = undefined;
        break;
      }
    }
  }

  return newArr.filter((e) => e !== undefined);
}
