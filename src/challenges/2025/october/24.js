// Hidden Treasure

/**
 * Given a 2D array representing a map of the ocean floor that includes a hidden treasure, and an array with the coordinates ([row, column]) for the next dive of your treasure search, return "Empty", "Found", or "Recovered" using the following rules:
 *
 * The given 2D array will contain exactly one unrecovered treasure, which will occupy multiple cells.
 *
 * Each cell in the 2D array will contain one of the following values:
 *
 *   "-": No treasure.
 *   "O": A part of the treasure that has not been found.
 *   "X": A part of the treasure that has already been found.
 *
 * If the dive location has no treasure, return "Empty".
 *
 * If the dive location finds treasure, but at least one other part of the treasure remains unfound, return "Found".
 *
 * If the dive location finds the last unfound part of the treasure, return "Recovered".
 *
 * @param {array} map - The 2D array representing the ocean floor.
 * @param {array} coordinates - The coordinates for the next dive of the treasure search.
 * @return {string} - "Empty", "Found", or "Recovered" based on the rules above.
 */
export function dive(map, coordinates) {
  let [y, x] = coordinates;

  if (map[y][x] == "-") {
    return "Empty";
  } else if (
    map[y][x] == "X" ||
    (map[y - 1][x] == "X" && map[y][x] == "O" && map[y + 1] !== undefined)
  ) {
    return "Found";
  } else {
    return "Recovered";
  }
}
