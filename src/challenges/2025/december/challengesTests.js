import * as challenge from "./index.js";
import * as input from "../../../data/index.js";
import { styleText } from "../../../utils/styleText.js";
export function challengesTests() {
  // November 2025
  console.log(styleText("Challenges: December 2025", "heading"));

  //01-12-2025 - Miles to Kilometers
  console.log(styleText("01-12-2025 - Miles to Kilometers"), {
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
  //12-12-2025 - Inventory Update
  console.log(styleText("12-12-2025 - Inventory Update"), {
    testCase: input.updateInventory,
    output: challenge.updateInventory(
      input.updateInventory.inventory,
      input.updateInventory.shipment,
    ),
  });
  //13-12-2025 - Game of Life
  console.log(styleText("13-12-2025 - Game of Life"), {
    testCase: input.gameOfLife,
    output: challenge.gameOfLife(input.gameOfLife),
  });
  //14-12-2025 - Title Case
  console.log(styleText("14-12-2025 - Title Case"), {
    testCase: input.titleCase,
    output: challenge.titleCase(input.titleCase),
  });
  //15-12-2025 - Speed Check
  console.log(styleText("15-12-2025 - Speed Check"), {
    testCase: { speedMph: input.speedCheck.speedMph, speedLimitKph: input.speedCheck.speedLimitKph },
    output: challenge.speedCheck(input.speedCheck.speedMph, input.speedCheck.speedLimitKph),
  });
  //16-12-2025 - Consonant Count
  console.log(styleText("16-12-2025 - Consonant Count"), {
    testCase: { text: input.consonantCount.text, target: input.consonantCount.target },
    output: challenge.hasConsonantCount(input.consonantCount.text, input.consonantCount.target),
  });

  //18-12-2025 - Checkerboard
  console.log(styleText("18-12-2025 - Checkerboard"), {
    testCase: input.createBoard,
    output: challenge.createBoard(input.createBoard),
  });
  //19-12-2025 - Pairwise
  console.log(styleText("19-12-2025 - Pairwise"), {
    testCase: { arr: input.pairwise.arr, target: input.pairwise.target },
    output: challenge.pairwise(input.pairwise.arr, input.pairwise.target),
  });
  //20-12-2025 - Purge Most Frequent
  console.log(styleText("20-12-2025 - Purge Most Frequent"), {
    testCase: input.purgeMostFrequent,
    output: challenge.purgeMostFrequent(input.purgeMostFrequent),
  });
  //21-12-2025 - Daylight Hours
  console.log(styleText("21-12-2025 - Daylight Hours"), {
    testCase: input.daylightHours,
    output: challenge.daylightHours(input.daylightHours),
  });

}
