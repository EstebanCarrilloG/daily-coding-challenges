import * as challenges2025 from "./2025/index.js";
export function getChallengesTests(month, year) {
  if (year === 2025) {
    switch (month) {
      case "august":
        challenges2025.august.challengesTests();
        break;
      case "september":
        challenges2025.september.challengesTests();
        break;
      case "october":
        challenges2025.october.challengesTests();
        break;
      case "november":
        challenges2025.november.challengesTests();
        break;
      default:
        console.warnfebru("No data found for the given month.");
        break;
    }
  }
  if (month === "all" && year === 0) {
    challenges2025.august.challengesTests();
    challenges2025.september.challengesTests();
    challenges2025.october.challengesTests();
    challenges2025.november.challengesTests();
  }
}
