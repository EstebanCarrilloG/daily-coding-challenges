//Battle of Words

/**
 * Given two sentences representing your team and an opposing team, where each word from your team battles the corresponding word from the opposing team, determine which team wins using the following rules:
 *   - The given sentences will always contain the same number of words.
 *   - Words are separated by a single space and will only contain letters.
 *   - The value of each word is the sum of its letters.
 *   - Letters a to z correspond to the values 1 through 26. For example, a is 1, and z is 26.
 *   - A capital letter doubles the value of the letter. For example, A is 2, and Z is 52.
 *   - Words battle in order: the first word of your team battles the first word of the opposing team, and so on.
 *   - A word wins if its value is greater than the opposing word's value.
 *   - The team with more winning words is the winner.
 * Returns "We win" if your team is the winner, "We lose" if your team loses, and "Draw" if both teams have the same number of wins.
 * @param {string} ourTeam - The string representing your team.
 * @param {string} opponent - The string representing the opposing team.
 * @returns {string} - A string indicating the outcome of the battle.
 */
export function battle2(ourTeam, opponent) {
  let ourTeamWords = ourTeam.split(" ");
  let opponentWords = opponent.split(" ");

  if (ourTeamWords.length !== opponentWords.length) return "Draw";

  const ourTeamScore = computeScores(ourTeamWords);
  const opponentScore = computeScores(opponentWords);

  let ourWins = 0;
  let opponentWins = 0;

  for (let i = 0; i < ourTeamScore.length; i++) {
    if (ourTeamScore[i] > opponentScore[i]) {
      ourWins++;
    }
    if (opponentScore[i] > ourTeamScore[i]) {
      opponentWins++;
    }
  }

  if (ourWins > opponentWins) {
    return "We win";
  } else if (opponentWins > ourWins) {
    return "We lose";
  }

  return "Draw";
}

/**
 * Computes the scores of the given words
 * @param {string[]} words - an array of words to compute the scores of
 * @returns {number[]} - an array of scores, where each score is the sum of the values of the letters in the corresponding word
 * @description
 * The function iterates through each word in the input array and computes the score of the word.
 * The score of a word is the sum of the values of its letters.
 * Lowercase letters have values from 1 to 26, and uppercase letters have values from 2 to 52.
 * The function returns an array of scores, where the score at index i corresponds to the word at index i in the input array.
 */
function computeScores(words) {
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let scores = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    let sum = 0;
    for (let j = 0; j < word.length; j++) {
      for (let k = 0; k < lower.length; k++) {
        if (word[j] === lower[k]) {
          sum += k + 1;
          break;
        }
      }
      for (let l = 0; l < upper.length; l++) {
        if (word[j] === upper[l]) {
          sum += (l + 1) * 2;
          break;
        }
      }
    }
    scores.push(sum);
  }

  return scores;
}
