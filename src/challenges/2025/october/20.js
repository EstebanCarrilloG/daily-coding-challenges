/* 
Tip Calculator

Given the price of your meal and a custom tip percent, return an array with three tip values; 15%, 20%, and the custom amount.

  * Prices will be given in the format: "$N.NN".
  * Custom tip percents will be given in this format: "25%".
  * Return amounts in the same "$N.NN" format, rounded to two decimal places.
  
For example, given a "$10.00" meal price, and a "25%" custom tip value, return ["$1.50", "$2.00", "$2.50"].
*/

/**
 * Given the price of your meal and a custom tip percent,
 * return an array with three tip values; 15%, 20%, and the custom amount.
 *
 * @param {string} mealPrice - The price of your meal in the format "$N.NN"
 * @param {string} customTip - The custom tip percent in the format "25%"
 * @returns {Array<string>} - An array with three tip values in the same "$N.NN" format, rounded to two decimal places.
 */
export function calculateTips(mealPrice, customTip) {
  mealPrice = Number(mealPrice.replace("$", ""));
  let tipPercents = [0.15, 0.2, Number(customTip.replace("%", "")) / 100];
  let tipValues = [];
  for (let i = 0; i < tipPercents.length; i++) {
    tipValues.push(`\$${(mealPrice * tipPercents[i]).toFixed(2)}`);
  }
  return tipValues;
}
