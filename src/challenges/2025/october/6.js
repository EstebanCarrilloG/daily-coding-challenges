/* 
Space Week Day 3: Phone Home
For day three of Space Week, you are given an array of numbers representing distances (in kilometers) between yourself, satellites, and your home planet in a communication route. Determine how long it will take a message sent through the route to reach its destination planet using the following constraints:

The first value in the array is the distance from your location to the first satellite.
Each subsequent value, except for the last, is the distance to the next satellite.
The last value in the array is the distance from the previous satellite to your home planet.
The message travels at 300,000 km/s.
Each satellite the message passes through adds a 0.5 second transmission delay.
Return a number rounded to 4 decimal places, with trailing zeros removed.

*/

/**
 * Calculates the time it takes for a message to travel through a communication route.
 * @param {Array<number>} route - An array of numbers representing distances (in kilometers) between yourself, satellites, and your home planet.
 * @returns {number} The time it takes for the message to reach its destination planet, rounded to 4 decimal places with trailing zeros removed.
 */
export function sendMessage(route) {
  let time = 0;
  let speed = 300000;
  for (let i = 0; i < route.length; i++) {
    time += route[i] / speed;

    if (route.length - 1 === i) break;

    time += 0.5;
  }

  return parseFloat(time.toFixed(4));
}
