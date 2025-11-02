//Fill The Tank

/* Given the size of a fuel tank, 
the current fuel level, 
and the price per gallon, 
return the cost to fill the tank all the way.*/

/**
 * Calculate the cost to fill a fuel tank all the way.
 * @param {number} tankSize - The size of the fuel tank.
 * @param {number} fuelLevel - The current fuel level.
 * @param {number} pricePerGallon - The price per gallon.
 * @returns {string} The cost to fill the tank all the way, formatted as a string with two decimal places.
 */
export function costToFill(tankSize, fuelLevel, pricePerGallon) {
  return "$" + ((tankSize - fuelLevel) * pricePerGallon).toFixed(2);
}

export default costToFill;
