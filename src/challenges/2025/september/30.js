// Phone Number Formatter
/* Given a string of ten digits, 
return the string as a phone number 
in this format: "+D (DDD) DDD-DDDD".*/

/**
 * Given a string of ten digits, returns the string as a phone number
 * in this format: "+D (DDD) DDD-DDDD".
 * @param {string} number - The string of ten digits to format.
 * @returns {string} The formatted phone number string.
 */
export function formatNumber(number) {
  let regExp = /^([0-9])([0-9]{3})([0-9]{3})([0-9]{4})$/g;

  return number.replace(regExp, (match, p1, p2, p3, p4) => {
    return `+${p1} (${p2}) ${p3}-${p4}`;
  });
}
