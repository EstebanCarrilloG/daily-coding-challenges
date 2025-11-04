import * as challenge from "./index.js";
import * as input from "../../../data/index.js";
import { styleText } from "../../../utils/styleText.js";

export function challengesTests() {
  // August 2025
  console.log(styleText("Challenges: August 2025", "heading"));
  // 11-08-2025 - Vowel balance.
  console.log(styleText("11-08-2025 - Vowel Balance"), {
    testCase: input.vowelBalance,
    output: challenge.isBalanced(input.vowelBalance),
  });
  // 12-08-2025 - Base Check
  console.log(styleText("12-08-2025 - Base Check"), {
    testCase: input.isValidNumber,
    output: challenge.isValidNumber(
      input.isValidNumber.number,
      input.isValidNumber.base
    ),
  });
  // 13-08-2025 - Fibonacci sequence.
  console.log(styleText("13-08-2025 - Fibonacci sequence"), {
    testCase: input.fibonacciSequence,
    output: challenge.fibonacciSequence(
      input.fibonacciSequence.startSequence,
      input.fibonacciSequence.length
    ),
  });
  // 14-08-2025 - S P A C E J A M.
  console.log(styleText("14-08-2025 - S P A C E J A M"), {
    testCase: input.spaceJam,
    output: challenge.spaceJam(input.spaceJam),
  });
  // 15-08-2025 - Jumble the words.
  console.log(styleText("15-08-2025 - Jumble the words"), {
    testCase: input.jbelmu,
    output: challenge.jbelmu(input.jbelmu),
  });
  // 16-08-2025 - Anagram Checker.
  console.log(styleText("16-08-2025 - Anagram Checker"), {
    testCase: input.areAnagrams,
    output: challenge.areAnagrams(
      input.areAnagrams.word1,
      input.areAnagrams.word2
    ),
  });
  // 17-08-2025 - Find target.
  console.log(styleText("17-08-2025 - Find target"), {
    testCase: input.findTarget,
    output: challenge.findTarget(input.findTarget.arr, input.findTarget.target),
  });
  // 18-08-2025 - Factorializer.
  console.log(styleText("18-08-2025 - Factorializer"), {
    testCase: input.factorial,
    output: challenge.factorial(input.factorial),
  });
  // 19-08-2025 - Sum of Squares
  console.log(styleText("19-08-2025 - Sum of Squaress"), {
    testCase: input.sumOfSquares,
    output: challenge.sumOfSquares(input.sumOfSquares),
  });
  // 20-08-2025 - Squares with 3.
  console.log(styleText("20-08-2025 - Squares with 3"), {
    testCase: input.squaresWithThree,
    output: challenge.squaresWithThree(input.squaresWithThree),
  });
  // 21-08-2025 - Mile Pace.
  console.log(styleText("21-08-2025 - Mile Pace"), {
    testCase: input.milePace,
    output: challenge.milePace(input.milePace.miles, input.milePace.duration),
  });
  // 22-08-2025 - Message Decoder.
  console.log(styleText("22-08-2025 - Message Decoder"), {
    testCase: input.decode.message,
    output: challenge.decode(input.decode.message, input.decode.shift),
  });
  // 23-08-2025 - Unnatural prime.
  console.log(styleText("23-08-2025 - Unnatural prime"), {
    testCase: input.isUnnaturalPrime,
    output: challenge.isUnnaturalPrime(input.isUnnaturalPrime),
  });
  // 24-08-2025 - Character Battle
  console.log(styleText("24-08-2025 - Character Battle"), {
    testCase: input.battle,
    output: challenge.battle(input.battle.myArmy, input.battle.opposingArmy),
  });
  //25-08-2025 - camelCase
  console.log(styleText("25-08-2025 - camelCase"), {
    testCase: input.toCamelCase,
    output: challenge.toCamelCase(input.toCamelCase),
  });
  //27-08-2025 - Unorder of Operations
  console.log(styleText("27-08-2025 - Unorder of Operations"), {
    testCase: input.evaluate,
    output: challenge.evaluate(
      input.evaluate.numbers,
      input.evaluate.operators
    ),
  });
  //28-08-2025 - Second Best
  console.log(styleText("28-08-2025 - Second Best"), {
    testCase: input.getLaptopCost,
    output: challenge.getLaptopCost(
      input.getLaptopCost.laptops,
      input.getLaptopCost.budget
    ),
  });
  //29-08-2025 - Candlelight
  console.log(styleText("29-08-2025 - Candlelight"), {
    testCase: input.burnCandles,
    output: challenge.burnCandles(
      input.burnCandles.candles,
      input.burnCandles.leftoversNeeded
    ),
  });
  //30-08-2025 - Array Duplicates
  console.log(styleText("30-08-2025 - Array Duplicates"), {
    testCase: input.findDuplicates,
    output: challenge.findDuplicates(input.findDuplicates),
  });
  //31-08-2025 - Hex Generator
  console.log(styleText("31-08-2025 - Hex Generator"), {
    testCase: input.generateHex,
    output: challenge.generateHex(input.generateHex),
  });
}
