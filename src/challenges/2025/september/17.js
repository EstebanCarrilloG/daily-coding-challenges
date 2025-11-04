/*
Slug Generator

Given a string, return a URL-friendly version of the string using the following constraints:

All letters should be lowercase.
All characters that are not letters, numbers, or spaces should be removed.
All spaces should be replaced with the URL-encoded space code %20.
Consecutive spaces should be replaced with a single %20.
The returned string should not have leading or trailing %20.

*/

/**
 * Given a string, returns a URL-friendly version of the string using the following constraints:
 * - All letters should be lowercase.
 * - All characters that are not letters, numbers, or spaces should be removed.
 * - All spaces should be replaced with the URL-encoded space code %20.
 * - Consecutive spaces should be replaced with a single %20.
 * - The returned string should not have leading or trailing %20.
 * @param {string} str - The string to generate a URL-friendly slug for.
 * @returns {string} - The generated URL-friendly slug.
 */
export function generateSlug(str) {
  str = str
    .trim()
    .toLowerCase()
    .replace(/([\[\]!*,#()\-\\?^%])/g, "")
    .replace(/(\s+)/g, "%20");

  return str;
}
