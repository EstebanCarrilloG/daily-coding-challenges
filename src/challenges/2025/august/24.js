//Character Battle
/**
 * Given two strings representing your army and an opposing army, each character from your army battles the character at the same position from the opposing army using the following rules:
 *   - Characters a-z have a strength of 1-26, respectively.
 *   - Characters A-Z have a strength of 27-52, respectively.
 *   - Digits 0-9 have a strength of their face value.
 *   - All other characters have a value of zero.
 *   - Each character can only fight one battle.
 * Returns a string indicating the outcome of the battle: "Opponent retreated", "We retreated", "We won", "We lost", or "It was a tie".
 * @param {string} myArmy - The string representing your army.
 * @param {string} opposingArmy - The string representing the opposing army.
 * @returns {string} - A string indicating the outcome of the battle.
 */
export function battle(myArmy, opposingArmy) {
  if (myArmy.length > opposingArmy.length) return "Opponent retreated";

  if (opposingArmy.length > myArmy.length) return "We retreated";

  let upperLettersValue = Array(26)
    .fill(97)
    .map((e, i) => e + i);

  let allLetters = upperLettersValue.concat(
    Array.from(upperLettersValue, (x, y) => x - 32)
  );

  let numbers = Array(10)
    .fill(48)
    .map((e, i) => e + i);

  let wordLength = myArmy.length;

  let myScore = 0;
  let opposingScore = 0;
  let myWins = 0;
  let opposingWins = 0;

  for (let i = 0; i < wordLength; i++) {
    let myLetter = myArmy[i].charCodeAt(0);
    let oponentLetter = opposingArmy[i].charCodeAt(0);

    for (let j = 0; j < allLetters.length; j++) {
      if (myLetter === numbers[j]) {
        myScore = j;
        break;
      }
      if (myLetter === allLetters[j]) {
        myScore = j + 1;
        break;
      }
      myScore = 0;
    }
    for (let j = 0; j < allLetters.length; j++) {
      if (oponentLetter === numbers[j]) {
        opposingScore = j;
        break;
      }
      if (oponentLetter === allLetters[j]) {
        opposingScore = j + 1;
        break;
      }
      opposingScore = 0;
    }

    if (myScore > opposingScore) {
      myWins += 1;
    } else if (opposingScore > myScore) {
      opposingWins += 1;
    }
  }

  if (myWins > opposingWins) {
    return "We won";
  } else if (opposingWins > myWins) {
    return "We lost";
  }

  return "It was a tie";
}
