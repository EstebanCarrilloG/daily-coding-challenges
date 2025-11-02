// Roman Numeral Parser

/**
 * Given a string representing a Roman numeral, return its integer value.
 *
 * Roman numerals consist of the following symbols and values:
 *
 * Symbol	Value
 * I	1
 * V	5
 * X	10
 * L	50
 * C	100
 * D	500
 * M	1000
 *
 * Numerals are read left to right. If a smaller numeral appears before a larger one, the value is subtracted. Otherwise, values are added.
 *
 * @param {string} numeral - The string representing a Roman numeral.
 * @returns {number} - The integer value of the Roman numeral.
 */
export function parseRomanNumeral(numeral) {
  const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let pairs = [];

  for (let i = 0; i <= Math.round(numeral.length / 2) + 1; i++) {
    if (i % 2 == 0)
      pairs.push(
        `${
          (numeral[numeral.length - i - 2] || "") +
          (numeral[numeral.length - i - 1] || "")
        }`
      );
  }

  pairs = pairs.reverse();
  let total = 0;

  for (let j = 0; j < pairs.length; j++) {
    let rNumber = pairs[j];
    let integerValue = 0;
    let letterValue = values[rNumber[0]] || 0;
    let nextLetterValue = values[rNumber[1]] || 0;

    if (nextLetterValue > letterValue) {
      integerValue = nextLetterValue - letterValue;
    } else {
      integerValue = letterValue + nextLetterValue;
    }
    total += integerValue;
  }
  return total;
}
