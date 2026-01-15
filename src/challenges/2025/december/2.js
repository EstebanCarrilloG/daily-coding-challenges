function isUpperCase(letter) {
  if (!letter) return false;
  let charCode = letter.charCodeAt(0);
  return charCode >= 65 && charCode <= 90;
}
export function toSnake(camel) {
  let snake_string = "";
  for (let i = 0; i < camel.length; i++) {
    snake_string += camel[i].toLowerCase();
    if (isUpperCase(camel[i + 1])) snake_string += "_";
  }
  return snake_string;
}
