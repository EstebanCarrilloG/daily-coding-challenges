/* 
HTML Attribute Extractor

Given a string of a valid HTML element, return the attributes of the element using the following criteria:

You will only be given one element.
Attributes will be in the format: attribute="value".
Return an array of strings with each attribute property and value, separated by a comma, in this format: ["attribute1, value1", "attribute2, value2"].
Return attributes in the order they are given.
If no attributes are found, return an empty array.
*/

/**
 * Extracts attributes from a given HTML element.
 *
 * @param {string} element - The HTML element to extract attributes from.
 * @returns {Array<string>} - An array of strings where each string is an attribute property and value, separated by a comma, in this format: ["attribute1, value1", "attribute2, value2"].
 */
export function extractAttributes(element) {
  const regExp = /([a-z_\-0-9]+)\s*=\s*"([a-z\s_\-0-9]+)"[^</]/gi;

  const attributes = [];
  element.replaceAll(regExp, (match, p1, p2, i, j) =>
    attributes.push(`${p1}, ${p2}`)
  );

  return attributes;
}
