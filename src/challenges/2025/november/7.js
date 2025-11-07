/* Counting Cards
A standard deck of playing cards has 13 unique cards in each suit. 
Given an integer representing the number of cards to pick from the deck, 
return the number of unique combinations of cards you can pick.

Order does not matter. Picking card A then card B is the same as picking 
card B then card A.

For example, given 52, return 1. 

There's only one combination of 52 cards to pick from a 52 card deck. 
nd given 2, return 1326, There's 1326 card combinations you can end up 
with when picking 2 cards from the deck.

*/

/**
 * Returns the number of unique combinations of cards you can pick from a standard deck of 52 cards.
 * Order does not matter. Picking card A then card B is the same as picking card B then card A.
 * @param {number} cards The number of cards to pick from the deck.
 * @returns {number} The number of unique combinations of cards you can pick.
 */
export function combinations(cards) {
  let permutations = 1;
  let options = 1;
  for (let i = cards; i > 0; i--) {
    permutations *= i;
    options *= 52 - (cards - i);
  }

  return Math.floor(options / permutations);
}
