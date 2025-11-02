// Space Week Day 5: Goldilocks Zone

/**
 * Calculate the "Goldilocks zone" of a star - the region
 * around a star where conditions are "just right" for liquid water to exist.
 *
 * @param {number} mass - the mass of the star
 * @return {array<number>} an array containing the start and end distances of its Goldilocks Zone in Astronomical Units
 */
export function goldilocksZone(mass) {
  let luminosity = mass ** 3.5;
  let start = Math.sqrt(luminosity) * 0.95;
  let end = Math.sqrt(luminosity) * 1.37;

  return [parseFloat(start.toFixed(2)), parseFloat(end.toFixed(2))];
}
