//Second Best

/**
 * Given an array of integers representing the price of different laptops, and an integer representing your budget, returns:
 *   * The second most expensive laptop if it is within your budget, or
 *   * The most expensive laptop that is within your budget, or
 *   * 0 if no laptops are within your budget.
 * Duplicate prices should be ignored.
 * @param {number[]} laptops - An array of integers representing the price of different laptops.
 * @param {number} budget - An integer representing your budget.
 * @returns {number} The second most expensive laptop if it is within your budget, or the most expensive laptop that is within your budget, or 0 if no laptops are within your budget.
 */
export function getLaptopCost(laptops, budget) {
  let uniquePrices = deleteDuplicates(laptops);

  uniquePrices.sort((a, b) => a - b).reverse();

  if (uniquePrices.length >= 2 && uniquePrices[1] <= budget) {
    return uniquePrices[1];
  } else {
    return uniquePrices.filter((e) => e <= budget)[0] ?? 0;
  }
}

function deleteDuplicates(arr) {
  let a = arr;
  for (let i = a.length - 1; i > 0; i--) {
    let elem = a[i];
    for (let j = i - 1; j >= 0; j--) {
      if (elem == a[j]) {
        a.splice(j, 1);
      }
    }
  }
  return a;
}
