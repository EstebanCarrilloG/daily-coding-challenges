import * as challenge from "./index.js";
import * as input from "../../../data/index.js";
import { styleText } from "../../../utils/styleText.js";
export function challengesTests() {
  // November 2025
  console.log(styleText("Challenges: December 2025", "heading"));

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

  //05-12-2025 - Symmetric Difference
  console.log(styleText("05-12-2025 - Symmetric Difference"), {
    testCase: input.difference,
    output: challenge.difference(input.difference.arr1, input.difference.arr2),
  });
  //06-12-2025 - Date Formatter
  console.log(styleText("06-12-2025 - Date Formatter"), {
    testCase: input.formatDate,
    output: challenge.formatDate(input.formatDate),
  });

  //08-12-2025 - Pounds to Kilograms
  console.log(styleText("08-12-2025 - Pounds to Kilograms"), {
    testCase: input.convertToKgs,
    output: challenge.convertToKgs(input.convertToKgs),
  });
  //09-12-2025 - Most Frequent
  console.log(styleText("09-12-2025 - Most Frequent"), {
    testCase: input.mostFrequent,
    output: challenge.mostFrequent(input.mostFrequent),
  });
  //10-12-2025 - Markdown Bold Parser
  console.log(styleText("10-12-2025 - Markdown Bold Parser"), {
    testCase: input.parseBold,
    output: challenge.parseBold(input.parseBold),
  });
  //11-12-2025 - Roman Numeral Builder
  console.log(styleText("11-12-2025 - Roman Numeral Builder"), {
    testCase: input.toRoman,
    output: challenge.toRoman(input.toRoman),
  });
}
