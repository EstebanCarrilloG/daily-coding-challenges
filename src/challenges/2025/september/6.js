/* 
Matrix Rotate

Given a matrix (an array of arrays), rotate the matrix 
90 degrees clockwise and return it. For instance, 
given [[1, 2], [3, 4]], which looks like this:

1	2
3	4

You should return [[3, 1], [4, 2]], which looks like this:

3	1
4	2
*/

/**
 * Rotate a given matrix by 90 degrees clockwise.
 * @param {Array<Array<number>>} matrix
 * @returns {Array<Array<number>>} The rotated matrix
 */
export function rotate(matrix) {
  let arr = []; // || let arr = structuredClone(matrix);

  for (let a = 0; a < matrix.length; a++) {
    arr[a] = [];
  }

  for (let i = matrix.length - 1; i >= 0; i--) {
    let a = matrix[i];
    for (let j = 0; j < a.length; j++) {
      arr[j][matrix.length - i - 1] = a[j];
    }
  }
  return arr;
}
