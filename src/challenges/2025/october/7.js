// Space Week Day 4: Landing Spot

/**
 * Finds the safest landing spot in a given matrix.
 * A landing spot is considered safe if it has a value of 0 and its surrounding cells have the lowest total danger.
 * The total danger of a cell is the sum of the values of its up, down, left, and right neighbors.
 * If a cell does not exist (i.e. it is on the edge of the matrix), its value is considered to be 0.
 * @param {Array<Array<number>>} matrix - A matrix of numbers representing potential landing spots for a rover.
 * @returns {Array<number>} The indices of the safest landing spot in the given matrix.
 */
export function findLandingSpot(matrix) {
  let sum = 0;
  let arr = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let up = undefined;
      let down = undefined;
      let prev = undefined;
      let next = undefined;

      if (matrix[i][j] !== 0) continue;

      if (i > 0) up = matrix[i - 1][j];

      prev = matrix[i][j - 1];
      next = matrix[i][j + 1];

      if (i < matrix.length - 1) down = matrix[i + 1][j];

      sum = (up ?? 0) + (down ?? 0) + (prev ?? 0) + (next ?? 0);

      arr.push({ sum: sum, value: [i, j] });
    }
  }
  return arr.sort((a, b) => a.sum - b.sum)[0].value;
}
