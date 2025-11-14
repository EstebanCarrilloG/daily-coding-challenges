/*  
Is It the Weekend?

Given a date in the format "YYYY-MM-DD", return the number of days left until the weekend.

The weekend starts on Saturday.
If the given date is Saturday or Sunday, return "It's the weekend!".
Otherwise, return "X days until the weekend.", where X is the number of days until Saturday.
If X is 1, use "day" (singular) instead of "days" (plural).
Make sure the calculation ignores your local timezone.

*/

/**
 * Given a date in the format "YYYY-MM-DD", returns the number of days left until the weekend.
 *
 * The weekend starts on Saturday.
 * If the given date is Saturday or Sunday, returns "It's the weekend!".
 * Otherwise, returns "X days until the weekend.", where X is the number of days until Saturday.
 * If X is 1, use "day" (singular) instead of "days" (plural).
 * Make sure the calculation ignores your local timezone.
 *
 * @param {string} dateString - The date to calculate the number of days until the weekend for.
 * @returns {string} - The number of days until the weekend.
 */
export function daysUntilWeekend(dateString) {
  const day = new Date(dateString).getUTCDay();
  if (day == 0 || day == 6) return "It's the weekend!";
  const daysTillSunday = 6 - day;
  return `${daysTillSunday} day${
    daysTillSunday === 1 ? "" : "s"
  } until the weekend.`;
}

