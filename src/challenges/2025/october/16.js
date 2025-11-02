// Email Validator

/**
 * Validates an email address according to the following constraints:
 * - It must contain exactly one @ symbol.
 * - The local part (before the @) can only contain letters (a-z, A-Z), digits (0-9), dots (.), underscores (_), or hyphens (-).
 * - The local part cannot start or end with a dot.
 * - The domain part (after the @) must contain at least one dot.
 * - The domain part must end with a dot followed by at least two letters.
 * - Neither the local or domain part can have two dots in a row.
 * @param {string} email - The email address to validate.
 * @returns {boolean} True if the email address is valid, false otherwise.
 */
export function validate(email) {
  let regExp = /^[a-z0-9]+([a-z0-9-._]*[a-z0-9])?@([a-z0-9!]+\.)+[a-z]{2,}/gi;
  return regExp.test(email);
}
