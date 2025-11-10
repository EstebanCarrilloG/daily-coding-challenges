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
  // 05-11-2025 - Matrix Builder
  console.log(styleText("05-11-2025 - Matrix Builder"), {
    testCase: input.buildMatrix,
    output: challenge.buildMatrix(
      input.buildMatrix.rows,
      input.buildMatrix.cols
    ),
  });
  // 06-11-2025 - Weekday Finder
  console.log(styleText("06-11-2025 - Weekday Finder"), {
    testCase: input.getWeekday,
    output: challenge.getWeekday(input.getWeekday),
  });
  // 07-11-2025 - Counting Cards
  console.log(styleText("07-11-2025 - Counting Cards"), {
    testCase: input.combinations,
    output: challenge.combinations(input.combinations),
  });
  // 08-11-2025 - Character Limit
  console.log(styleText("08-11-2025 - Character Limit"), {
    testCase: input.canPost,
    output: challenge.canPost(input.canPost),
  });

  // 10-11-2025 - Extension Extractor
  console.log(styleText("10-11-2025 - Extension Extractor"), {
    testCase: input.getExtension,
    output: challenge.getExtension(input.getExtension),
  });
}
