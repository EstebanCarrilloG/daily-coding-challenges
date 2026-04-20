/**
  Given an array with two numbers, the first being the number of rows and the second being the number of columns, return a matrix (an array of arrays) filled with "X" and "O" characters of the given size.

    - The characters should alternate like a checkerboard.
    - The top-left cell must always be "X".
 * @param {Array} dimensions - An array containing the number of rows and columns.
 * @returns {Array} - The created game board.
 */
export function createBoard(dimensions) {
  let character = "X"

  const arr = new Array()

  for (let i = 0; i < dimensions[0]; i++) {

    const rows = new Array(dimensions[1]).fill("")
    let counter = 0;

    for (let j = 0; j < dimensions[1]; j++) {
      if (i > 0 && arr[i - 1][j] == "X") { counter = 1 }
      character = (counter % 2 === 0) ? "X" : "O";
      counter++;
      rows[j] = character
    }
    arr.push(rows)
  }
  return arr;
}
