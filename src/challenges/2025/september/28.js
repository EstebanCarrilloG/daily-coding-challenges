//CSV Header Parser

/**
 * Given a CSV string, return an array of the headings
 * in the string, with any leading or trailing whitespace removed.
 * @param {string} csv - The CSV string to process.
 * @returns {Array<string>} An array of the headings in the string.
 */
export function getHeadings(csv) {
  return csv.split(",").map((e) => e.trim());
}
