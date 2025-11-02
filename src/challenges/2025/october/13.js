//24 to 12

/**
 * Given a string representing a time of the day
 * in the 24-hour format of "HHMM", returns the time
 * in its equivalent 12-hour format of "H:MM AM" or "H:MM PM"
 * @param {string} time - a four-digit string in 24-hour time format, from "0000" to "2359"
 * @returns {string} - the time in its equivalent 12-hour format of "H:MM AM" or "H:MM PM"
 */
export function to12(time) {
  const [hours, minutes] = time.split(/([0-9]{2})/g).filter((e) => e !== "");

  if (hours > 12 && hours <= 23) {
    return `${hours - 12}:${minutes} PM`;
  }

  return `${hours == "00" ? "12" : Number(hours)}:${minutes} AM`;
}
