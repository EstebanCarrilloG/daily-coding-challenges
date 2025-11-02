// Space Week Day 1: Stellar Classification

/**
 * Returns the stellar classification of a star based on its surface temperature in Kelvin.
 *
 * Temperature Ranges:
 * O: 30000K or higher
 * B: 10000K to 29999K
 * A: 7500K to 9999K
 * F: 6000K to 7499K
 * G: 5200K to 5999K
 * K: 3700K to 5199K
 * M: 0K to 3699K
 *
 * @param {number} temp - The surface temperature of the star in Kelvin.
 * @returns {string} - The stellar classification of the star.
 */
export function classification(temp) {
  let value = "";

  temp >= 30000 && (value = "O");
  temp >= 10000 && temp <= 29999 && (value = "B");
  temp >= 7500 && temp <= 9999 && (value = "A");
  temp >= 6000 && temp <= 7499 && (value = "F");
  temp >= 5200 && temp <= 5999 && (value = "G");
  temp >= 3700 && temp <= 5199 && (value = "K");
  temp >= 0 && temp <= 3699 && (value = "M");

  return value;
}
