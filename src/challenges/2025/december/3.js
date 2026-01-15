/**
 * Converts a markdown list item into a HTML list item.
 *
 * @param {string} markdown - The markdown list item to be converted.
 * @returns {string} The HTML list item string if the format is valid, otherwise "Invalid format".
 * @example
 * convertListItem("1.    My     item") // "<li>My item</li>"
 */
export function convertListItem(markdown) {
  markdown = markdown.trim();
  if (!isNaN(markdown[0]) && markdown[1] === "." && markdown[2] === " ")
    return `<li>${markdown.slice(3).trim()}</li>`;

  return "Invalid format";
}
