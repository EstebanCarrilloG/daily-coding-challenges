/**
 * Checks if two given fingerprints are a match.
 * A fingerprint is a match if at most 10% of the characters differ.
 * @param {string} fingerprintA - The first fingerprint to compare.
 * @param {string} fingerprintB - The second fingerprint to compare.
 * @returns {boolean} True if the two fingerprints are a match, false otherwise.
 */
export function isMatch(fingerprintA, fingerprintB) {
  if (fingerprintA.length !== fingerprintB.length) return false;

  let coincidences = 0;

  for (let i = 0; i < fingerprintA.length; i++) {
    if (fingerprintA[i] == fingerprintB[i]) coincidences++;
  }
  let diferingChars = fingerprintA.length - coincidences;

  return !(diferingChars > 0.1 * fingerprintA.length);
}
