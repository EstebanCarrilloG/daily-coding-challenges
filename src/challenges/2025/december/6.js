/**
 * Given a date in the format "Month day, year", returns the date in the format "YYYY-MM-DD".
 *
 * The given month will be the full English month name. For example: "January", "February", etc.
 * In the return value, pad the month and day with leading zeros if necessary to ensure two digits.
 * For example, given "December 6, 2025", return "2025-12-06".
 * @param {string} dateString - The date string to format.
 * @returns {string} - The formatted date string.
 */
export function formatDate(dateString) {
  let date = new Date(dateString).toISOString();
  return date.slice(date[0] === "0" ? 1 : 0, 10);
}
