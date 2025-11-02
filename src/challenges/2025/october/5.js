//Space Week Day 2: Exoplanet Search

/**
 * Returns true if the given luminosity readings indicate the presence of an exoplanet.
 * An exoplanet is detected using the transit method, which is when a planet passes in front of a star, reducing its observed luminosity.
 * A star is considered to have an exoplanet if any single reading is less than or equal to 80% of the average of all readings.
 * @param {string} readings - A string where each character represents the luminosity reading of a star.
 * @returns {boolean} - True if the given luminosity readings indicate the presence of an exoplanet, false otherwise.
 */
export function hasExoplanet(readings) {
  let numbers = Array(10)
    .fill(48)
    .map((e, i) => String.fromCharCode(e + i));

  let letters = Array(26)
    .fill(65)
    .map((e, i) => String.fromCharCode(e + i));
  let characters = [...numbers, ...letters];
  let n = readings.length;

  let characterValues = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < characters.length; j++) {
      if (readings[i] === characters[j]) {
        characterValues.push(j);
      }
      continue;
    }
  }
  return characterValues.find(
    (e) =>
      e <=
      (characterValues.reduce((prev, current) => prev + current, 0) / n) * 0.8
  ) === undefined
    ? false
    : true;
}

hasExoplanet("665544554");
