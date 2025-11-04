import { styleText as st } from "node:util";
/**
 * Returns a string with the given text styled according to the given type.
 * Types are "subHeading" and "heading". "subHeading" will return the text
 * styled with a bright cyan color, while "heading" will return the text styled
 * with a bright yellow color and a bold font weight.
 * @param {string} text - The text to style.
 * @param {string} [type="subHeading"] - The type of styling to apply to the text.
 * @returns {string} The styled text string.
 */
export function styleText(text, type = "subHeading") {
  switch (type) {
    case "subHeading":
      return st(["cyan"], `▸ ${text} \n`);
    case "heading":
      return st(["bgYellow", "green", "bold"], ` • ${text} \n`);
    case "input":
      return st(["bold", "italic", "whiteBright"], `• ${text}`, "reset");
    case "paragraph":
      return st(["whiteBright"], `${text} \n`);
    default:
      break;
  }
}
