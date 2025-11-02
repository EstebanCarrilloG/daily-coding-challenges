//Unique Characters
//Given a string, determine if all the characters in the string are unique.

/**
 * Checks if all characters in a given string are unique.
 * @param {string} str - The string to check.
 * @returns {boolean} True if all characters in the string are unique, false otherwise.
 */
export function allUnique(str) {
  let coincidences = 0;

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j]) {
        coincidences++;
        //console.log(str[i], str[j])
        continue;
      }
    }
    //console.log(coincidences);
  }

  return coincidences === str.length;
}
