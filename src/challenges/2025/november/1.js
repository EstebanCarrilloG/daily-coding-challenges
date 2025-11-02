/* Signature Validation

Given a message string, a secret key string, and a signature number, determine if the signature is valid using this encoding method:

Letters in the message and secret key have these values:
a to z have values 1 to 26 respectively.
A to Z have values 27 to 52 respectively.
All other characters have no value.
Compute the signature by taking the sum of the message plus the sum of the secret key.
For example, given the message "foo" and the secret key "bar", the signature would be 57:

f (6) + o (15) + o (15) = 36
b (2) + a (1) + r (18) = 21
36 + 21 = 57
Check if the computed signature matches the provided signature.*/

/**
 * Given a message string, a secret key string, and a signature number, determine if the signature is valid using this encoding method.
 *
 * Letters in the message and secret key have these values:
 *   a to z have values 1 to 26 respectively.
 *   A to Z have values 27 to 52 respectively.
 *   All other characters have no value.
 * Compute the signature by taking the sum of the message plus the sum of the secret key.
 * For example, given the message "foo" and the secret key "bar", the signature would be 57:
 *   f (6) + o (15) + o (15) = 36
 *   b (2) + a (1) + r (18) = 21
 *   36 + 21 = 57
 * Check if the computed signature matches the provided signature.
 *
 * @param {string} message - The message string.
 * @param {string} key - The secret key string.
 * @param {number} signature - The signature number.
 * @return {boolean} - Whether the signature is valid.
 */
export function verify(message, key, signature) {
  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let messageValue = 0;
  let keyValue = 0;

  messageValue = message
    .split("")
    .map((e) => letters.indexOf(e) + 1)
    .reduce(
      (a, b) => a + b,

      0
    );
  keyValue = key
    .split("")
    .map((e) => letters.indexOf(e) + 1)
    .reduce(
      (a, b) => a + b,

      0
    );

  return messageValue + keyValue === signature;
}
