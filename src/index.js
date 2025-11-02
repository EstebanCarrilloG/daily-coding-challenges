import * as challenge from "./challenges/index.js";
import * as input from "./data/index.js";
import { styleText } from "./utils/styleText.js";

// August 2025
console.log(styleText("Callenges: August 2025", "heading"));

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
  output: challenge.evaluate(input.evaluate.numbers, input.evaluate.operators),
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
// ------------------------------------------------------------------------------------------

// September 2025
console.log(styleText("Callenges: September 2025", "heading"));

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

//------------------------------------------------------------------------------------------
// October 2025
console.log(styleText("Callenges: October 2025", "heading"));
// 01-10-2025 - Binary to Decimal
console.log(styleText("01-10-2025 - Binary to Decimal"), {
  testCase: input.toDecimal,
  output: challenge.toDecimal(input.toDecimal),
});
//02-10-2025
console.log(styleText("02-10-2025 - Decimal to Binary"), {
  testCase: input.toBinary,
  output: challenge.toBinary(input.toBinary),
});
//03-10-2025 - P@ssw0rd Str3ngth!
console.log(styleText("03-10-2025 - P@ssw0rd Str3ngth!"), {
  testCase: input.checkStrength,
  output: challenge.checkStrength(input.checkStrength),
});
//04-10-2025 - Space Week Day 1: Stellar Classification
console.log(
  styleText("04-10-2025 - Space Week Day 1: Stellar Classification"),
  {
    testCase: input.classification,
    output: challenge.classification(input.classification),
  }
);
//05-10-2025 - Space Week Day 2: Exoplanet Search
console.log(styleText("05-10-2025 - Space Week Day 2: Exoplanet Search"), {
  testCase: input.hasExoplanet,
  output: challenge.hasExoplanet(input.hasExoplanet),
});
//06-10-2025 - Space Week Day 3: Phone Home
console.log(styleText("06-10-2025 - Space Week Day 3: Phone Home"), {
  testCase: input.sendMessage,
  output: challenge.sendMessage(input.sendMessage),
});
//07-10-2025 - Space Week Day 4: Landing Spot
console.log(styleText("07-10-2025 - Space Week Day 4: Landing Spot"), {
  testCase: input.findLandingSpot,
  output: challenge.findLandingSpot(input.findLandingSpot),
});
//08-10-2025 - Space Week Day 5: Goldilocks Zone
console.log(styleText("08-10-2025 - Space Week Day 5: Goldilocks Zone"), {
  testCase: input.goldilocksZone,
  output: challenge.goldilocksZone(input.goldilocksZone),
});
//09-10-2025 - Space Week Day 6: Moon Phase
console.log(styleText("09-10-2025 - Space Week Day 6: Moon Phase"), {
  testCase: input.moonPhase,
  output: challenge.moonPhase(input.moonPhase),
});
//10-10-2025 - Space Week Day 7: Space Week Day 7: Launch Fuel
console.log(styleText("10-10-2025 - Space Week Day 7: Launch Fuel"), {
  testCase: input.launchFuel,
  output: challenge.launchFuel(input.launchFuel),
});
//11-10-2025 - Hex to Decimal
console.log(styleText("11-10-2025 - Hex to Decimal"), {
  testCase: input.hexToDecimal,
  output: challenge.hexToDecimal(input.hexToDecimal),
});
//12-10-2025 - Battle of Words
console.log(styleText("12-10-2025 - Battle of Words"), {
  testCase: input.battle2,
  output: challenge.battle2(input.battle2.ourTeam, input.battle2.opponent),
});
//13-10-2025 - 24 to 12
console.log(styleText("13-10-2025 - 24 to 12"), {
  testCase: input.to12,
  output: challenge.to12(input.to12),
});
//14-10-2025 - String Count
console.log(styleText("14-10-2025 - String Count"), {
  testCase: input.count,
  output: challenge.count(input.count.text, input.count.pattern),
});
//15-10-2025 - HTML Tag Stripper
console.log(styleText("15-10-2025 - HTML Tag Stripper"), {
  testCase: input.stripTags,
  output: challenge.stripTags(input.stripTags),
});
//16-10-2025 - Email Validator
console.log(styleText("16-10-2025 - Email Validator"), {
  testCase: input.validate,
  output: challenge.validate(input.validate),
});
//17-10-2025 - Credit Card Masker
console.log(styleText("17-10-2025 - Credit Card Masker"), {
  testCase: input.mask,
  output: challenge.mask(input.mask),
});
//18-10-2025 - Missing Socks
console.log(styleText("18-10-2025 - Missing Socks"), {
  testCase: input.sockPairs,
  output: challenge.sockPairs(input.sockPairs.pairs, input.sockPairs.cycles),
});
//19-10-2025 - HTML Attribute Extractor
console.log(styleText("19-10-2025 - HTML Attribute Extractor"), {
  testCase: input.extractAttributes,
  output: challenge.extractAttributes(input.extractAttributes),
});
//20-10-2025 - Tip Calculator
console.log(styleText("20-10-2025 - Tip Calculator"), {
  testCase: input.calculateTips,
  output: challenge.calculateTips(
    input.calculateTips.mealPrice,
    input.calculateTips.customTip
  ),
});
//21-10-2025 - Thermostat Adjuster 2
console.log(styleText("21-10-2025 - Thermostat Adjuster 2"), {
  testCase: input.adjustThermostat,
  output: challenge.adjustThermostat(
    input.adjustThermostat.currentF,
    input.adjustThermostat.targetC
  ),
});
//22-10-2025 - Speak Wisely, You Must
console.log(styleText("22-10-2025 - Speak Wisely, You Must"), {
  testCase: input.wiseSpeak,
  output: challenge.wiseSpeak(input.wiseSpeak),
});
//23-10-2025 - Favorite Songs
console.log(styleText("23-10-2025 - Favorite Songs"), {
  testCase: input.favoriteSongs,
  output: challenge.favoriteSongs(input.favoriteSongs),
});
//24-10-2025 - Hidden Treasure
console.log(styleText("24-10-2025 - Hidden Treasure"), {
  testCase: input.dive,
  output: challenge.dive(input.dive.map, input.dive.coordinates),
});
//25-10-2025 - Complementary DNA
console.log(styleText("25-10-2025 - Complementary DNA"), {
  testCase: input.complementaryDNA,
  output: challenge.complementaryDNA(input.complementaryDNA),
});
//26-10-2025 - Duration Formatter
console.log(styleText("26-10-2025 - Duration Formatter"), {
  testCase: input.format,
  output: challenge.format(input.format),
});
//27-10-2025 - Integer Sequence
console.log(styleText("27-10-2025 - Integer Sequence"), {
  testCase: input.sequence,
  output: challenge.sequence(input.sequence),
});
//28-10-2025 - Navigator
console.log(styleText("28-10-2025 - Navigator"), {
  testCase: input.navigate,
  output: challenge.navigate(input.navigate),
});
//29-10-2025 - Email Sorter
console.log(styleText("29-10-2025 - Email Sorter"), {
  testCase: input.sort,
  output: challenge.sort(input.sort),
});
//30-10-2025 - Nth Prime
console.log(styleText("30-10-2025 - Nth Prime"), {
  testCase: input.nthPrime,
  output: challenge.nthPrime(input.nthPrime),
});
//21-10-2025 - SpOoKy~CaSe
console.log(styleText("21-10-2025 - SpOoKy~CaSe"), {
  testCase: input.spookify,
  output: challenge.spookify(input.spookify),
});

// ------------------------------------------------------------------------------------------
// November 2025
console.log(styleText("Callenges: November 2025", "heading"));

// 01-11-2025 - Signature Validation
console.log(styleText("01-11-2025 - Signature Validation"), {
  testCase: input.verify,
  output: challenge.verify(
    input.verify.message,
    input.verify.key,
    input.verify.signature
  ),
});
