import * as challenge from "./index.js";
import * as input from "../../../data/index.js";
import { styleText } from "../../../utils/styleText.js";

export function challengesTests() {
  // October 2025
  console.log(styleText("Challenges: October 2025", "heading"));
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
}
