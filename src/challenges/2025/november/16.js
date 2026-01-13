/**
 * Given the width and height of a rectangle, returns the count of all the possible rectangles that can be formed within the given rectangle.
 * @param {number} width The width of the rectangle.
 * @param {number} height The height of the rectangle.
 * @returns {number} The count of all the possible rectangles that can be formed within the given rectangle.
 */
export function countRectangles(width, height) {
  let sum = 0;
  for (let i = 1; i <= width; i++) {
    for (let j = 1; j <= height; j++) {
      sum += i * j;
    }
  }
  return sum;
}
