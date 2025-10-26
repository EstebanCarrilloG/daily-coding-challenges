/*
Duration Formatter

Given an integer number of seconds, return a string representing the same duration in the format "H:MM:SS", where "H" is the number of hours, "MM" is the number of minutes, and "SS" is the number of seconds. Return the time using the following rules:

Seconds: Should always be two digits.
Minutes: Should omit leading zeros when they aren't needed. Use "0" if the duration is less than one minute.
Hours: Should be included only if they're greater than zero.
*/

/**
 * Given an integer number of seconds, return a string representing the same duration in the format "H:MM:SS", where "H" is the number of hours, "MM" is the number of minutes, and "SS" is the number of seconds.
 * @param {number} seconds - The number of seconds to format.
 * @returns {string} A string representing the same duration in the format "H:MM:SS".
 */
export function format(seconds) {
  let s = seconds % 60;
  let r = seconds / 60;

  let min = parseInt(r % 60);
  let h = parseInt(r / 60);

  return `${h !== 0 ? h + ":" : ""}${
    h !== 0 ? (min < 10 ? `0${min}` : min) : min
  }:${s < 10 ? `0${s}` : s}`;
}
