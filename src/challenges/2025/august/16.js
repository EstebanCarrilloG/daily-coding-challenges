// Anagram Checker

/*Given two strings, determine if they are 
anagrams of each other (contain the same 
characters in any order). */

/**
 * Checks if two strings are anagrams of each other.
 * @param {string} str1 - The first string to check.
 * @param {string} str2 - The second string to check.
 * @returns {boolean} True if the strings are anagrams, false otherwise.
 */
export function areAnagrams(str1, str2) {
  return (
    Array.from(str1.toLowerCase()).sort().toString() ===
    Array.from(str2.toLowerCase()).sort().toString()
  );
}
