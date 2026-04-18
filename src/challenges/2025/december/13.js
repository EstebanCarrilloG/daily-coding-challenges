/**
 * Verifies the next state of a cell based on its current state and the sum of its neighbors
 * @param {number} sum 
 * @param {number} cell 
 * @returns {number} 
 */
function verify(sum, cell) {
  if (cell == 1) {
    if (sum < 2) {
      return 0
    } else if (sum == 2 || sum == 3) {
      return 1

    } else if (sum > 3) {
      return 0
    }
  } else if (cell == 0) {
    if (sum == 3) {
      return 1
    }
    return 0
  }

}

/**
Given a matrix (array of arrays) representing the current state in Conway's Game of Life, return the next state of the matrix using these rules:

  - Each cell is either 1 (alive) or 0 (dead).
  - A cell's neighbors are the up to eight surrounding cells (vertically, horizontally, and diagonally).
  - Cells on the edges have fewer than eight neighbors.
* @param {number[][]} grid 
* @returns {number[][]} 
*/
export function gameOfLife(grid) {

  const gridCopy = structuredClone(grid);
  for (let i = 0; i < grid.length; i++) {
    let row = grid[i];

    for (let j = 0; j < row.length; j++) {
      let sum = 0;

      if (grid[i - 1] === undefined) {
        sum = (grid[i][j - 1] || 0) + (grid[i][j + 1] || 0) + (grid[i + 1][j - 1] || 0) + (grid[i + 1][j] || 0) + (grid[i + 1][j + 1] || 0)
        gridCopy[i][j] = verify(sum, row[j]);
        continue;
      }

      if (i === grid.length - 1) {
        sum = (grid[i - 1][j - 1] || 0) + (grid[i - 1][j] || 0) + (grid[i - 1][j + 1] || 0) + (grid[i][j - 1] || 0) + (grid[i][j + 1] || 0)
        gridCopy[i][j] = verify(sum, row[j]);
        continue;
      }


      sum = (grid[i - 1][j - 1] || 0) + (grid[i - 1][j] || 0) + (grid[i - 1][j + 1] || 0) + (grid[i][j - 1] || 0) + (grid[i][j + 1] || 0) + (grid[i + 1][j - 1] || 0) + (grid[i + 1][j] || 0) + (grid[i + 1][j + 1] || 0)
      gridCopy[i][j] = verify(sum, row[j]);

    }
  }
  return gridCopy;
}
