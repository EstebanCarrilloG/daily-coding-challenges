/**
 * Checks if a given message is a valid message based on a validator.
 *
 * The function takes two strings as arguments, a message and a validator.
 * The message is the string to be validated, and the validator is the string
 * containing the words that the message should start with.
 *
 * @param {string} message - The message to be validated
 * @param {string} validator - The validator string
 * @returns {boolean} True if the message is valid, false otherwise
 */
export function isValidMessage(message, validator) {
  message = message.toLowerCase();
  validator = validator.toLowerCase();

  let messageWords = message.split(" ");

  if (messageWords.length !== validator.length) return false;

  let coincidences = 0;

  for (let i = 0; i < validator.length; i++) {
    if (messageWords[i].startsWith(validator[i])) coincidences++;
  }

  return coincidences === validator.length;
}
