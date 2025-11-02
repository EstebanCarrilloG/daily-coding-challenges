// camelCase

/**
 * Given a string, returns its camel case version using the following rules:
 *   - Words in the string argument are separated by one or more
 *     characters from the following set: space ( ), dash (-), or
 *     underscore (_). Treat any sequence of these as a word break.
 *   - The first word should be all lowercase.
 *   - Each subsequent word should start with an uppercase letter, with the rest of it lowercase.
 *   - All spaces and separators should be removed.
 * @param {string} s - The string to be converted to camel case.
 * @returns {string} The camel case version of the string.
 */
export function toCamelCase(s) {
  return s
    .replace(/([A-Z])/g, (m, p1) => p1.toLowerCase())
    .replace(/[\W | _]([a-zA-Z])/g, (match, p1) => p1.toUpperCase())
    .replace(/\W|_/g, "");
}
