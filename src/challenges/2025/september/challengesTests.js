import * as challenge from "./index.js";
import * as input from "../../../data/index.js";
import { styleText } from "../../../utils/styleText.js";

// September 2025
export function challengesTests() {
  console.log(styleText("Challenges: September 2025", "heading"));

  // 01-09-2025 - Tribonacci Sequence.
  console.log(styleText("01-09-2025 - Tribonacci Sequence"), {
    testCase: input.tribonacciSequence,
    output: challenge.tribonacciSequence(
      input.tribonacciSequence.startSequence,
      input.tribonacciSequence.length
    ),
  });
  //02-09-2025 - RGB to Hex
  console.log(styleText("02-09-2025 - RGB to Hex"), {
    testCase: input.rgbToHex,
    output: challenge.rgbToHex(input.rgbToHex),
  });
  // 03-09-2025 - Pangram
  console.log(styleText("03-09-2025 - Pangram"), {
    testCase: input.isPangram,
    output: challenge.isPangram(
      input.isPangram.sentence,
      input.isPangram.letters
    ),
  });
  // 04-09-2025 - Vowel Repeater
  console.log(styleText("04-09-2025 - Vowel Repeater"), {
    testCase: input.repeatVowels,
    output: challenge.repeatVowels(input.repeatVowels),
  });
  //05-09-2025 - IPv4 Validator
  console.log(styleText("05-09-2025 - IPv4 Validator"), {
    testCase: input.isValidIPv4,
    output: challenge.isValidIPv4(input.isValidIPv4),
  });
  // 06-09-2025 - Matrix Rotate.
  console.log(styleText("06-09-2025 - Matrix Rotate"), {
    testCase: input.rotate,
    output: challenge.rotate(input.rotate),
  });
  // 07-09-2025 - Roman Numeral Parser
  console.log(styleText("07-09-2025 - Roman Numeral Parser"), {
    testCase: input.parseRomanNumeral,
    output: challenge.parseRomanNumeral(input.parseRomanNumeral),
  });
  //08-09-2025 - Acronym Builder
  console.log(styleText("08-09-2025 - Acronym Builder"), {
    testCase: input.buildAcronym,
    output: challenge.buildAcronym(input.buildAcronym),
  });
  // 09-09-2025 - Unique characters.
  console.log(styleText("09-09-2025 - Unique characters"), {
    testCase: input.allUnique,
    output: challenge.allUnique(input.allUnique),
  });
  // 10-09-2025 - Array Diff
  console.log(styleText("10-09-2025 - Array Diff"), {
    testCase: input.arrayDiff,
    output: challenge.arrayDiff(input.arrayDiff.arr1, input.arrayDiff.arr2),
  });
  // 11-09-2025 - Reverse Sentence
  console.log(styleText("11-09-2025 - Reverse Sentence"), {
    testCase: input.reverseSentence,
    output: challenge.reverseSentence(input.reverseSentence),
  });
  // 12-09-2025 - Screen Time
  console.log(styleText("12-09-2025 - Screen Time"), {
    testCase: input.tooMuchScreenTime,
    output: challenge.tooMuchScreenTime(input.tooMuchScreenTime),
  });
  //13-09-2025 - Missing Numbers
  console.log(styleText("13-09-2025 - Missing Numbers"), {
    testCase: input.findMissingNumbers,
    output: challenge.findMissingNumbers(input.findMissingNumbers),
  });
  //14
  //15-09-2025 - Thermostat Adjuster
  console.log(styleText("15-09-2025 - Thermostat Adjuster"), {
    testCase: input.adjustThermostat2,
    output: challenge.adjustThermostat2(
      input.adjustThermostat2.temp,
      input.adjustThermostat2.target
    ),
  });
  // 16-09-2025 - Sentence Capitalizer
  console.log(styleText("16-09-2025 - Sentence Capitalizer"), {
    testCase: input.capitalize,
    output: challenge.capitalize(input.capitalize),
  });
  // 17-09-2025 - Slug Generator
  console.log(styleText("17-09-2025 - Slug Generator"), {
    testCase: input.generateSlug,
    output: challenge.generateSlug(input.generateSlug),
  });
  // 18-09-2025 - Fill The Tank.
  console.log(styleText("18-09-2025 - Fill The Tank"), {
    testCase: input.costToFill,
    output: challenge.costToFill(
      input.costToFill.tankSize,
      input.costToFill.fuelLevel,
      input.costToFill.pricePerGallon
    ),
  });
  // 19-09-2025 - Photo Storage.
  console.log(styleText("19-09-2025 - Photo Storage"), {
    testCase: input.numberOfPhotos,
    output: challenge.numberOfPhotos(
      input.numberOfPhotos.photoSizeMb,
      input.numberOfPhotos.hardDriveSizeGb
    ),
  });
  // 20-09-2025 - File Storage
  console.log(styleText("20-09-2025 - File Storage"), {
    testCase: input.numberOfFiles,
    output: challenge.numberOfFiles(
      input.numberOfFiles.fileSize,
      input.numberOfFiles.fileUnit,
      input.numberOfFiles.driveSizeGb
    ),
  });
  // 22-09-2025 - Digits vs Letters
  console.log(styleText("22-09-2025 - Digits vs Letters"), {
    testCase: input.digitsOrLetters,
    output: challenge.digitsOrLetters(input.digitsOrLetters),
  });
  // 23-09-2025 - String Mirror
  console.log(styleText("23-09-2025 - String Mirror"), {
    testCase: input.isMirror,
    output: challenge.isMirror(input.isMirror.str1, input.isMirror.str2),
  });
  // 24-09-2025 - Perfect square.
  console.log(styleText("24-09-2025 - Perfect square"), {
    testCase: input.isPerfectSquare,
    output: challenge.isPerfectSquare(input.isPerfectSquare),
  });
  // 25-09-2025 - 2nd Largest.
  console.log(styleText("25-09-2025 - 2nd Largest"), {
    testCase: input.secondLargest,
    output: challenge.secondLargest(input.secondLargest),
  });
  // 26-09-2025 - Caught Speeding.
  console.log(styleText("26-09-2025 - Caught Speeding"), {
    testCase: input.speeding,
    output: challenge.speeding(input.speeding.speeds, input.speeding.limit),
  });
  // 27-09-2025 - Spam Detector.
  console.log(styleText("27-09-2025 - Spam Detector"), {
    testCase: input.isSpam,
    output: challenge.isSpam(input.isSpam),
  });
  // 28-09-2025 - CSV Header Parser.
  console.log(styleText("28-09-2025 - CSV Header Parser"), {
    testCase: input.getHeadings,
    output: challenge.getHeadings(input.getHeadings),
  });
  // 29-09-2025 - Longest Word.
  console.log(styleText("29-09-2025 - Longest Word"), {
    testCase: input.getLongestWord,
    output: challenge.getLongestWord(input.getLongestWord),
  });
  // 30-09-2025 - Phone Number Formatter.
  console.log(styleText("30-09-2025 - Phone Number Formatter"), {
    testCase: input.formatNumber,
    output: challenge.formatNumber(input.formatNumber),
  });
}
