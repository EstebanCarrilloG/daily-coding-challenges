// Caught Speeding
/* 
Given an array of numbers representing the speed 
at which vehicles were observed traveling, and a number 
representing the speed limit, return an array with two 
items, the number of vehicles that were speeding, followed 
by the average amount beyond the speed limit of those vehicles.
*/

/**
 * Calculate the number of speeding vehicles and the average difference from the speed limit.
 * @param {Array<number>} speeds - An array of vehicle speeds.
 * @param {number} limit - The speed limit.
 * @returns {Array<number>} An array containing the number of speeding vehicles and the average difference from the speed limit.
 */
export function speeding(speeds, limit) {
  let speedyVehicles = 0;
  let diference = 0;

  speeds.forEach((e) => {
    if (e > limit) {
      diference += e - limit;
      speedyVehicles++;
    }
  });
  if (speedyVehicles === 0) return [0, 0];

  return [speedyVehicles, diference / speedyVehicles];
}
