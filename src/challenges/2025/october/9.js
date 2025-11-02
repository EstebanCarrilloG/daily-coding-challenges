/*  
Space Week Day 6: Moon Phase
For day six of Space Week, you will be given a date in the format "YYYY-MM-DD" and need to determine the phase of the moon for that day using the following rules:

Use a simplified lunar cycle of 28 days, divided into four equal phases:

"New": days 1 - 7
"Waxing": days 8 - 14
"Full": days 15 - 21
"Waning": days 22 - 28
After day 28, the cycle repeats with day 1, a new moon.

Use "2000-01-06" as a reference new moon (day 1 of the cycle) to determine the phase of the given day.
You will not be given any dates before the reference date.
Return the correct phase as a string.
*/

/**
 * Determine the phase of the moon for a given date.
 *
 * The phase is determined using a simplified lunar cycle of 28 days,
 * divided into four equal phases: "New", "Waxing", "Full", and "Waning".
 *
 * The reference date for the cycle is "2000-01-06", which is day 1 of the cycle.
 *
 * @param {string} dateString - The date to determine the phase for, in the format "YYYY-MM-DD"
 * @returns {string} - The phase of the moon for the given date
 */
export function moonPhase(dateString) {
  let arr = dateString.split("-");

  let refDate = new Date(["2000", "01", "06"]);
  let date = new Date(arr);

  let difference = date - refDate;
  let daysDiff = Math.floor(difference / (1000 * 60 * 60 * 24));

  let cycleDay = (daysDiff % 28) + 1;

  if (cycleDay >= 1 && cycleDay <= 7) return "New";
  if (cycleDay >= 8 && cycleDay <= 14) return "Waxing";
  if (cycleDay >= 15 && cycleDay <= 21) return "Full";
  if (cycleDay >= 22 && cycleDay <= 28) return "Waning";
}
