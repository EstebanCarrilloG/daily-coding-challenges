/* 
Screen Time

Given an input array of seven integers, representing a week's time,
where each integer is the amount of hours spent on your phone that day, 
determine if it is too much screen time based on these constraints:

If any single day has 10 hours or more, it's too much.
If the average of any three days in a row is greater than or equal to 8 hours, it’s too much.
If the average of the seven days is greater than or equal to 6 hours, it's too much.

*/

/**
 * Determine if it is too much screen time based on the given hours.
 *
 * Given an input array of seven integers, representing a week's time,
 * where each integer is the amount of hours spent on your phone that day,
 * determine if it is too much screen time based on these constraints:
 *
 * If any single day has 10 hours or more, it's too much.
 * If the average of any three days in a row is greater than or equal to 8 hours, it’s too much.
 * If the average of the seven days is greater than or equal to 6 hours, it's too much.
 *
 * @param {number[]} hours - An array of seven integers representing a week's time
 * @returns {boolean} - Whether it is too much screen time
 */
export function tooMuchScreenTime(hours) {
  if (hours.reduce((a, b) => a + b, 0) / hours.length >= 6) return true;

  for (let i = 0; i < hours.length; i++) {
    if (hours[i + 1] == undefined || hours[i + 2] === undefined) break;
    if ((hours[i] + hours[i + 1] + hours[i + 2]) / 3 >= 8) return true;
  }

  return hours.map((e) => e >= 10).find((e) => e == true) !== undefined;
}
