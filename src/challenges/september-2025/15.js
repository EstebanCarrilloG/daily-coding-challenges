/*
Thermostat Adjuster
Given the current temperature of a room and a target temperature, return a string indicating how to adjust the room temperature based on these constraints:

Return "heat" if the current temperature is below the target.
Return "cool" if the current temperature is above the target.
Return "hold" if the current temperature is equal to the target.
*/

/**
 * Given the current temperature of a room and a target temperature, return a string indicating how to adjust the room temperature based on these constraints:
 *
 * Return "heat" if the current temperature is below the target.
 * Return "cool" if the current temperature is above the target.
 * Return "hold" if the current temperature is equal to the target.
 *
 * @param {number} temp - The current temperature of the room.
 * @param {number} target - The target temperature.
 * @returns {string} - A string indicating how to adjust the room temperature.
 */
export function adjustThermostat2(temp, target) {
  return temp < target ? "heat" : temp > target ? "cool" : "hold";
}
