//Message Decoder
/* Given a secret message string, and an integer 
representing the number of letters that were used 
to shift the message to encode it, return the 
decoded string. */

/**
 * Shifts a given character by a certain number of places in the alphabet.
 * If the character is uppercase, it will wrap around to the beginning of the alphabet
 * if it would go past 'z'. If the character is lowercase, it will wrap around to the
 * beginning of the alphabet if it would go past 'z', and to the end of the alphabet if it
 * would go before 'a'.
 * @param {string} s - The character to shift.
 * @param {number} shift - The number of places to shift the character.
 * @returns {number} The shifted character code.
 */
export function shiftWord(s, shift) {
  shift = -shift;
  let char = s.charCodeAt(0);

  if (char > 64 && char < 91) {
    if (char + shift > 90) {
      let diference = char + shift - 90;
      char = 64 + diference;
      return char;
    }
    if (char + shift < 65) {
      let diference = char + shift - 65;
      char = 91 + diference;
      return char;
    }
    return char + shift;
  }
  if (char > 96 && char < 123) {
    if (char + shift > 122) {
      let diference = char + shift - 123;
      char = 97 + diference;
      return char;
    }
    if (char + shift < 97) {
      let diference = char + shift - 97;
      char = 123 + diference;
      return char;
    }
    return char + shift;
  }

  return char;
}

/**
 * Decodes a given message by applying a Caesar cipher shift to each character in the message.
 * @param {string} message - The message to decode.
 * @param {number} shift - The shift to apply to each character in the message.
 * @returns {string} The decoded message.
 */
export function decode(message, shift) {
  let w = [];

  for (let i = 0; i < message.length; i++) {
    w[i] = shiftWord(message[i], shift);
  }

  return String.fromCharCode(...w);
}
