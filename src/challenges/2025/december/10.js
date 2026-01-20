/**
 * Replaces bold markdown text with HTML bold tags.
 * @param {string} markdown - The markdown text to be parsed.
 * @returns {string} The parsed markdown text with HTML bold tags.
 */
export function parseBold(markdown) {
  let regExp = /([*|_]{2})([\w\s.,_!:;]+)(\1)/gi;
  return markdown.replaceAll(regExp, (match, n1, n2) => {
    if (n2[0] === " " || n2[n2.length - 1] === " ") return match;
    return `<b>${n2}</b>`;
  });
}
