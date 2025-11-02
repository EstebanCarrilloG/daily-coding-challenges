//Fibonacci Sequence

/*The Fibonacci sequence is a series of numbers 
where each number is the sum of the two preceding 
ones. When starting with 0 and 1, the first 10 
numbers in the sequence are 
0, 1, 1, 2, 3, 5, 8, 13, 21, 34. 

Given an array containing the first two numbers of 
a Fibonacci sequence, and an integer representing 
the length of the sequence, return an array containing 
the sequence of the given length.

*/

/**
 * Generates a Fibonacci sequence starting from a given sequence.
 * @param {Array<number>} startSequence - The starting sequence of the Fibonacci sequence.
 * @param {number} length - The length of the sequence to generate.
 * @returns {Array<number>} The generated Fibonacci sequence of the given length.
 */
export function fibonacciSequence(startSequence, length) {
  let arr = new Array(length); //
  arr = [...startSequence];
  let currentNumber = 0;

  for (let i = 0; i < length - 2; i++) {
    currentNumber = arr[i];
    arr.push(currentNumber + arr[i + 1]);
  }
  return length <= 1 ? arr.splice(0, length) : arr;
}
