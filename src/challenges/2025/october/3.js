//P@ssw0rd Str3ngth!
/**
 * Checks the strength of a given password.
 * A password is considered weak if it doesn't follow at least two of the following rules:
 *   - It must be at least 8 characters long.
 *   - It must contain at least one digit.
 *   - It must contain at least one special character.
 *   - It must contain at least one uppercase letter and one lowercase letter.
 * A password is considered medium if it follows exactly two of the rules above.
 * A password is considered strong if it follows all four of the rules above.
 * @param {string} password - The password to check.
 * @returns {string} - A string indicating the strength of the password: "weak", "medium", or "strong".
 */
export function checkStrength(password) {
  let specialCharacters = /[!@#$%^&*]/g;
  let numbers = /[0-9]{1,}/g;
  let letters = /[a-z]{1,}/g;
  let lettersUpper = /[A-Z]{1,}/g;
  let followedRules = 0;
  let arr = password.split("");

  if (arr.length >= 8) followedRules += 1;
  if (numbers.test(password)) followedRules += 1;
  if (specialCharacters.test(password)) followedRules += 1;
  if (letters.test(password) && lettersUpper.test(password)) followedRules += 1;

  if (followedRules < 2) {
    return "weak";
  }
  if (followedRules == 2 || followedRules == 3) {
    return "medium";
  }
  if (followedRules === 4) {
    return "strong";
  }
}
