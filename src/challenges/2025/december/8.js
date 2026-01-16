/**
 * Converts a given number of pounds to kilograms and returns a string
 * that represents the conversion.
 * @param {number} lbs - The number of pounds to convert.
 * @returns {string} A string representing the conversion.
 * @example
 * const result = convertToKgs(10);
 * console.log(result); // "10 pounds equals 4.54 kilograms."
 */
export function convertToKgs(lbs) {
  let kg = (lbs * 0.453592).toFixed(2);
  return `${lbs} pound${lbs == 0 || lbs > 1 ? "s" : ""} equals ${kg} kilogram${(kg >= 0 && kg < 1) || kg > 1 ? "s" : ""}.`;
}
