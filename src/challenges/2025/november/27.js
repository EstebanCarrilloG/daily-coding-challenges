/**
 * Given a birthday date string in the format "YYYY-MM-DD", returns the age of the person on November 27, 2025.
 *
 * @param {string} birthday - The birthday date string in the format "YYYY-MM-DD".
 * @returns {number} - The age of the person on November 27, 2025.
 */
export function calculateAge(birthday) {
  let birthdayDate = new Date(birthday);
  let currentDate = new Date("2025-11-27");

  let age = (currentDate - birthdayDate) * 3.171e-11;

  return Number(
    (age - 1).toString().slice(0, 5)[4] > 0
      ? age.toString().slice(0, 2)
      : (age - 1).toString().slice(0, 2)
  );
}
