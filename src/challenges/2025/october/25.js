// Complementary DNA

/**
 * Given a string representing a DNA sequence, returns its complementary strand.
 * The letters "A" and "T" complement each other.
 * The letters "C" and "G" complement each other.
 * For example, given "ACGT", return "TGCA".
 * @param {string} strand - The DNA sequence to find the complementary strand for.
 * @returns {string} The complementary DNA strand.
 */
export function complementaryDNA(strand) {
  let n = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };
  let newStr = "";

  for (let i = 0; i < strand.length; i++) {
    newStr += n[strand[i]];
  }

  return newStr;
}
