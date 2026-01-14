/**
 * Checks if a given sequence of numbers is a valid FizzBuzz sequence.
 * @param {Array<number>} sequence - The sequence of numbers to check.
 * @returns {boolean} True if the sequence is a valid FizzBuzz sequence, false otherwise.
 * */
export function isFizzBuzz(sequence) {
  let isValid = false;
  for (let i = 0, j = i + 1; i < sequence.length; i++, j++) {
    if (
      sequence[i] % 3 == 0 ||
      sequence[i] % 5 == 0 ||
      (sequence[i] % 5 == 0 && sequence[i] % 3 == 0)
    ) {
      isValid = false;
      break;
    }
    if (
      (j % 3 == 0 && sequence[i] == "Fizz") ||
      (j % 5 == 0 && sequence[i] == "Buzz") ||
      (j % 5 == 0 && j % 3 == 0 && sequence[i] == "FizzBuzz")
    ) {
      sequence[i] = j;
    }

    if (sequence[i] !== j) {
      isValid = false;
      break;
    }

    isValid = true;
  }

  return isValid;
}
