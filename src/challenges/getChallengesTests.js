import * as challenges2025 from "./2025/index.js";
import * as challenges2026 from "./2026/index.js";
export function getChallengesTests(month, year) {
  if (year === 2025) {
    if (month !== "all") {
      try {
        challenges2025[month].challengesTests();
      } catch {
        console.warn("No data found for the given month.");
      }
    } else {
      Object.keys(challenges2025).forEach((month) => {
        challenges2025[month].challengesTests();
      });
    }
  } else if (year === 2026) {
    if (month !== "all") {
      try {
        challenges2026[month].challengesTests();
      } catch {
        console.warn("No data found for the given month.");
      }
    } else {
      Object.keys(challenges2026).forEach((month) => {
        challenges2026[month].challengesTests();
      });
    }
  }
}
