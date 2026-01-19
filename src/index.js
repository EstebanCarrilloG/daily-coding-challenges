import { getChallengesTests } from "./challenges/getChallengesTests.js";
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { styleText } from "./utils/styleText.js";
import * as data from "./data/index.js";

async function main() {
  const rl = readline.createInterface({ input, output });
  let month = "";
  let year = 0;
  const MAX_YEAR = 2026;
  const MIN_YEAR = 2025;

  while (!data.months.includes(month)) {
    const m = await rl.question(styleText("Enter the month: ", "input"));
    month = m.toLowerCase().trim();

    if (!data.months.includes(month)) {
      console.warn(
        `Invalid month. Please try again. (valid values are: ${data.months} )`,
      );
    }
  }
  //if (month === "all") return { month, year };

  while (year < MIN_YEAR || year > MAX_YEAR) {
    const y = await rl.question(styleText("Enter the year: ", "input"));
    year = Number(y);
    if (year < MIN_YEAR || year > MAX_YEAR) {
      console.warn(
        `Invalid year. Please try again. (${MIN_YEAR} to ${MAX_YEAR})`,
      );
    }
  }

  rl.close();

  return { month, year };
}

console.log(
  "\n",
  styleText("Hello! Welcome to the Coding Challenges!", "heading"),
);
console.log(
  styleText(
    "Here you can see the challenges tests for the given month and year.\nStart by entering the month and year of your choice.\n\nTo see all the challenges tests, write 'all' on month. \n\nNote: The challenges starts from August 2025.",
    "paragraph",
  ),
);

main().then(({ month, year }) => {
  getChallengesTests(month, year);
});
