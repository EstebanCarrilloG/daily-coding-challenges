/* 
Character Limit

In this challenge, you are given a string and need to determine 
if it fits in a social media post. Return the following strings based on the rules given:

"short post" if it fits within a 40-character limit.
"long post" if it's greater than 40 characters and fits within an 80-character limit.
"invalid post" if it's too long to fit within either limit.
*/

/**
 * Determine if a given string fits within a social media post character limit.
 *
 * @param {string} message - The string to check against the character limit.
 * @returns {string} "short post" if the string fits within a 40-character limit, "long post" if it's greater than 40 characters and fits within an 80-character limit, or "invalid post" if it's too long to fit within either limit.
 */
export function canPost(message) {
  let length = message.length;
  if (length <= 40) return "short post";
  if (length > 40 && length <= 80) return "long post";

  return "invalid post";
}
