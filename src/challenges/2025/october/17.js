//Credit Card Masker

/**
 * Given a string of credit card numbers, returns a masked version of it.
 * The string will contain four sets of four digits (0-9), with all sets being separated by a single space, or a single hyphen (-).
 * Replace all numbers, except the last four, with an asterisk (*).
 * Leave the remaining characters unchanged.
 * For example, given "4012-8888-8888-1881" return "****-****-****-1881".
 * @param {string} card - The string of credit card numbers to mask.
 * @returns {string} The masked string of credit card numbers.
 */
export function mask(card) {
  let regExp = /^(\d{4})([\s\-]?)(\d{4})[\s\-]?(\d{4})[\s\-]?(\d{4})$/g;

  if (!card.match(regExp)) return "Error: Not a valid credit card number";

  return card.replace(
    regExp,
    (_, p1, p2, p3, p4, p5) => `****${p2}`.repeat(3) + p5
  );
}
