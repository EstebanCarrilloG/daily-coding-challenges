/**
 * Converts a given distance in miles to kilometers.
 * @param {number} miles - The distance in miles.
 * @returns {number} The distance in kilometers, rounded to two decimal places.
 */
export function convertToKm(miles) {
  return Number((miles * 1.60934).toFixed(2));
}
