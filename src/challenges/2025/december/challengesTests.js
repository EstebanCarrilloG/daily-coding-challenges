import * as challenge from "./index.js";
import * as input from "../../../data/index.js";
import { styleText } from "../../../utils/styleText.js";
export function challengesTests() {
  // November 2025
  console.log(styleText("Challenges: November 2025", "heading"));

  //01-12-2025 - Miles to Kilometers
  console.log(styleText("01-11-2025 - Miles to Kilometers"), {
    testCase: input.convertToKm,
    output: challenge.convertToKm(input.convertToKm),
  });
  //02-12-2025 - Camel to Snake
  console.log(styleText("02-12-2025 - Camel to Snake"), {
    testCase: input.toSnake,
    output: challenge.toSnake(input.toSnake),
  });
  //03-12-2025 - Markdown Ordered List Item Converter
  console.log(styleText("03-12-2025 - Markdown Ordered List Item Converter"), {
    testCase: input.convertListItem,
    output: challenge.convertListItem(input.convertListItem),
  });
}
