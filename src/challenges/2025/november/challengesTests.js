import * as challenge from "./index.js";
import * as input from "../../../data/index.js";
import { styleText } from "../../../utils/styleText.js";
export function challengesTests() {
  // November 2025
  console.log(styleText("Challenges: November 2025", "heading"));

  // 01-11-2025 - Signature Validation
  console.log(styleText("01-11-2025 - Signature Validation"), {
    testCase: input.verify,
    output: challenge.verify(
      input.verify.message,
      input.verify.key,
      input.verify.signature
    ),
  });

  // 03-11-2025 - Word Counter
  console.log(styleText("03-11-2025 - Word Counter"), {
    testCase: input.countWords,
    output: challenge.countWords(input.countWords),
  });
  // 04-11-2025 - Image Search
  console.log(styleText("04-11-2025 - Image Search"), {
    testCase: input.imageSearch,
    output: challenge.imageSearch(
      input.imageSearch.images,
      input.imageSearch.searchTerm
    ),
  });
}
