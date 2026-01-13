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
  // 11-11-2025 - Vowels and Consonants
  console.log(styleText("11-11-2025 - Vowels and Consonants"), {
    testCase: input.count2,
    output: challenge.count2(input.count2),
  });
  // 12-11-2025 - Email Signature Generator
  console.log(styleText("12-11-2025 - Email Signature Generator"), {
    testCase: input.generateSignature,
    output: challenge.generateSignature(
      input.generateSignature.name,
      input.generateSignature.title,
      input.generateSignature.company
    ),
  });

  // 14-11-2025 - Is It the Weekend?
  console.log(styleText("14-11-2025 - Is It the Weekend?"), {
    testCase: input.daysUntilWeekend,
    output: challenge.daysUntilWeekend(input.daysUntilWeekend),
  });

  // 15-11-2025 - GCD
  console.log(styleText("15-11-2025 - GCD"), {
    testCase: input.gcd,
    output: challenge.gcd(input.gcd.x, input.gcd.y),
  });

  // 16-11-2025 - Rectangle Count
  console.log(styleText("16-11-2025 - Rectangle Count"), {
    testCase: input.countRectangles,
    output: challenge.countRectangles(
      input.countRectangles.width,
      input.countRectangles.height
    ),
  });

  //17-11-2025 - Fingerprint Test
  console.log(styleText("17-11-2025 - Fingerprint Test"), {
    testCase: input.isMatch,
    output: challenge.isMatch(
      input.isMatch.fingerprintA,
      input.isMatch.fingerprintB
    ),
  });

  // 18-11-2025 - 100 Characters
  console.log(styleText("18-11-2025 - 100 Characters"), {
    testCase: input.oneHundred,
    output: challenge.oneHundred(input.oneHundred),
  });

  // 19-11-2025 - Markdown Heading Converter
  console.log(styleText("19-11-2025 - Markdown Heading Converter"), {
    testCase: input.convert,
    output: challenge.convert(input.convert),
  });

  // 20-11-2025 - Longest Word
  console.log(styleText("20-11-2025 - Longest Word"), {
    testCase: input.longestWord,
    output: challenge.longestWord(input.longestWord),
  });

  // 21-11-2025 - LCM
  console.log(styleText("21-11-2025 - LCM"), {
    testCase: input.lcm,
    output: challenge.lcm(input.lcm.a, input.lcm.b),
  });
}
