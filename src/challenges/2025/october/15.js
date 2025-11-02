//HTML Tag Stripper
/* 
Given a string of HTML code, remove the tags and return the plain text content.

  * The input string will contain only valid HTML.
  * HTML tags may be nested.
  * Remove the tags and any attributes.

For example, '<a href="#">Click here</a>' should return "Click here".
*/

/**
 * Given a string of HTML code, remove the tags and return the plain text content.
 *
 * @param {string} html - The HTML code to be stripped of tags.
 * @returns {string} The plain text content without tags.
 */
export function stripTags(html) {
  let regExp = /<[\w\s="#]+>([\w\s!]+)<\/\w+>/g;
  let res = html;

  do {
    res = res.replaceAll(regExp, (_, p1) => p1);
  } while (res.match(regExp));

  return res === html ? "" : res;
}
