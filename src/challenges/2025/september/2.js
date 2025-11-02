//RGB to Hex

/**
 * Given a CSS rgb(r, g, b) color string, returns its hexadecimal equivalent.
 * Make any letters lowercase.
 * Return a # followed by six characters. Don't use any shorthand values.
 * @param {string} rgb - The CSS rgb(r, g, b) color string.
 * @returns {string} - The hexadecimal equivalent of the given color string.
 * @example rgbToHex("rgb(255, 255, 255)") "#ffffff"
 * @example rgbToHex("rgb(1, 2, 3)") "#010203"
 */
export function rgbToHex(rgb) {
  let regExp = /^rgb\(([0-9]{1,255},\s?[0-9]{1,255},\s?[0-9]{1,255})\)$/g;

  if (rgb.match(regExp) === null) return "Invalid value";
  let rgbColors = rgb
    .replace(regExp, (_, p1) => p1)
    .split(",")
    .map((e) => Number(e));
  console.log(rgbColors);

  let r = rgbColors[0].toString(16).padStart(2, "0");
  let g = rgbColors[1].toString(16).padStart(2, "0");
  let b = rgbColors[2].toString(16).padStart(2, "0");
  return `#${r}${g}${b}`;
}
