/* 
Extension Extractor
Given a string representing a filename, return the extension of the file.

The extension is the part of the filename that comes after the last period (.).
If the filename does not contain a period or ends with a period, return "none".
The extension should be returned as-is, preserving case.
*/

/**
 * Given a string representing a filename, returns the extension of the file.
 *
 * The extension is the part of the filename that comes after the last period (.)
 * If the filename does not contain a period or ends with a period, returns "none"
 * The extension should be returned as-is, preserving case.
 * @param {string} filename - The filename to extract the extension from.
 * @returns {string} The extension of the file, or "none" if no extension exists.
 */
export function getExtension(filename) {
  if (!filename.includes(".") || filename[filename.length - 1] === ".")
    return "none";
  return filename.split(".")[filename.split(".").length - 1];
}
