/**
 Given an array of values, remove all occurrences of the most frequently occurring element and return the resulting array.

  - If multiple values are tied for most frequent, remove all of them.
  - Do not change any of the other elements or their order.
 * @param {Array} arr 
 * @returns {Array}
 */
export function purgeMostFrequent(arr) {

  let mostFrecuent = {};
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    let currentCount = 0;
    for (let j = arr.length - 1; j > i; j--) {
      if (arr[i] === arr[j]) {
        currentCount++;
      }
    }
    if (currentCount >= count) {
      count = currentCount
      mostFrecuent = { ...mostFrecuent, [arr[i]]: currentCount }
    };

  }

  const max = Math.max(...Object.values(mostFrecuent).map((e, i) => e))

  const valuesToDelete = Object.entries(mostFrecuent).filter(e => e[1] === max).map(e => isNaN(e[0]) ? e[0] : Number(e[0]))

  return arr.filter((e) => valuesToDelete.indexOf(e) === -1);
}