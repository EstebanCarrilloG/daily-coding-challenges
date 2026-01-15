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
}
