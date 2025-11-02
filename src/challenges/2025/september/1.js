//Tribonacci Sequence
/*  
The Tribonacci sequence is a series of numbers where each number is the sum of the three preceding ones. When starting with 0, 0 and 1, the first 10 numbers in the sequence are 0, 0, 1, 1, 2, 4, 7, 13, 24, 44.

Given an array containing the first three numbers of a Tribonacci sequence, and an integer representing the length of the sequence, return an array containing the sequence of the given length.

Your function should handle sequences of any length greater than or equal to zero.
If the length is zero, return an empty array.
Note that the starting numbers are part of the sequence.
*/

/**
 * Generates a Tribonacci sequence starting from a given sequence.
 * @param {Array<number>} startSequence - The starting sequence of the Tribonacci sequence.
 * @param {number} length - The length of the sequence to generate.
 * @returns {Array<number>} The generated Tribonacci sequence of the given length.
 */
export function tribonacciSequence(startSequence, length) {
  if (length <= 3) return startSequence.splice(0, length);

  let sum = 0;
  for (let i = 0; i < length - 3; i++) {
    sum = startSequence[i] + startSequence[i + 1] + startSequence[i + 2];
    startSequence.splice(startSequence.length, 0, sum);
  }
  return startSequence;
}
