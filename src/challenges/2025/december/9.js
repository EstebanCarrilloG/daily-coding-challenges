/**
 * Given an array of elements,
 * return the element that appears most frequently.
 * There will always be a single most frequent element.
 * @param {Array<string>} arr - The array of strings to search.
 * @returns {string} The most frequent letter in the array that appears more than once.
 */
export function mostFrequent(arr) {
  let letter = "";
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    let currentLetter = arr[i];
    for (let j = 0; j < arr.length; j++) {
      if (currentLetter === arr[j]) count++;
    }
    if (count >= 2) {
      letter = currentLetter;
    }
  }
  return letter;
}
