/* 
IPv4 Validator

Given a string, determine if it is a valid IPv4 Address. A valid IPv4 address consists of four integer numbers separated by dots (.). Each number must satisfy the following conditions:

  * It is between 0 and 255 inclusive.
  * It does not have leading zeros (e.g. 0 is allowed, 01 is not).
  * Only numeric characters are allowed.

*/

/**
 * Determines if a given string is a valid IPv4 Address.
 * A valid IPv4 address consists of four integer numbers separated by dots (.).
 * Each number must satisfy the following conditions:
 *   - It is between 0 and 255 inclusive.
 *   - It does not have leading zeros (e.g. 0 is allowed, 01 is not).
 *   - Only numeric characters are allowed.
 * @param {string} ipv4 - The string to check
 * @returns {boolean} True if the string is a valid IPv4 Address, false otherwise
 */
export function isValidIPv4(ipv4) {
  let regExp = /(([0-9]{1,3})\.){3}[0-9]{1,3}/g;
  if (!regExp.test(ipv4)) return false;
  let isValidIp = true;

  let ip = ipv4.match(regExp)[0];
  console.log(ip);
  ip.split(".").forEach((e) => {
    if (parseInt(e) > 255 || (e.length > 1 && e[0] == 0)) {
      isValidIp = false;
      return;
    }
  });

  return isValidIp;
}
