//Candlelight

/**
 * Given an integer representing the number of candles you start with, and an integer representing how many burned candles it takes to create a new one, return the number of candles you will have used after creating and burning as many as you can.
 * @param {number} candles - The number of candles you start with.
 * @param {number} leftoversNeeded - The number of burned candles it takes to create a new one.
 * @return {number} The total number of candles used.
 */
export function burnCandles(candles, leftoversNeeded) {
  let restCandles = 0;
  let totalCandles = candles;

  do {
    restCandles = candles % leftoversNeeded;
    candles = Math.floor(candles / leftoversNeeded);
    totalCandles += candles;
    candles += restCandles;
  } while (candles !== restCandles);

  return totalCandles;
}
