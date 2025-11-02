/**
 * Given the distance in miles and the duration in minutes:seconds,
 * returns a string representing the average pace in minutes:seconds.
 * @param {number} miles - The distance in miles.
 * @param {string} duration - The duration in minutes:seconds.
 * @returns {string} A string representing the average pace in minutes:seconds.
 */

export function milePace(miles, duration) {
  let time = duration.split(":");

  let timeInSeconds = parseInt(time[0]) * 60 + parseInt(time[1]);

  let averageTimeS = Math.round(timeInSeconds / miles);
  let min = Math.floor(averageTimeS / 60);
  let sec = averageTimeS % 60;

  return `${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}`;
}
