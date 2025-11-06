/* 
Weekday Finder

Given a string date in the format YYYY-MM-DD, return the day of the week.

Valid return days are:

"Sunday"
"Monday"
"Tuesday"
"Wednesday"
"Thursday"
"Friday"
"Saturday"
Be sure to ignore time zones.


*/

/**
 * Given a string date in the format YYYY-MM-DD, returns the day of the week.
 *
 * Valid return days are:
 *
 * "Sunday"
 * "Monday"
 * "Tuesday"
 * "Wednesday"
 * "Thursday"
 * "Friday"
 * "Saturday"
 *
 * Be sure to ignore time zones.
 *
 * @param {string} dateString - The date string in the format YYYY-MM-DD.
 * @returns {string} - The day of the week.
 */
export function getWeekday(dateString) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return days[new Date(dateString).getUTCDay()];
}
