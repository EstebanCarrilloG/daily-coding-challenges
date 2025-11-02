// Spam Detector
/**
 * Checks if a given phone number is a spam number.
 * A spam number is defined as a number that does not follow the format
 * "+XXX XXX-XXXX"  or whose first digit is not 0 or whose area code
 * is greater than 900 or less than 200 or whose fourth or more digits are the same in a row,
 * or whose last four digits contain the sum of the three digits of the area code.
 * @param {string} number - The phone number to check.
 * @returns {boolean} True if the phone number is a spam number, false otherwise.
 */

export function isSpam(number) {
  const regExp = /\+([0-9]{0,2})\s\(([0-9]{3})\)\s([0-9]{3})-([0-9]{4})/g;
  const digitsInRow = /(\d)\1{3,}/g;

  let cleanNumber = number.replace(/\W/g, "");

  return !regExp.test(
    number.replace(regExp, (match, p1, p2, p3, p4) => {
      //console.log(match, p1, p2, p3, p4);
      let sum = Array.from(p3)
        .reduce((sum, e) => sum + parseInt(e), 0)
        .toString();

      if (
        p1[0] !== "0" ||
        p2 < 200 ||
        p2 > 900 ||
        Array.from(p4).indexOf(sum) !== -1 ||
        digitsInRow.test(cleanNumber)
      )
        return 0;

      return match;
    })
  );
}
