

/**
Given a string title, return a new string formatted in title case using the following rules:

 - Capitalize the first letter of each word.
 - Make all other letters in each word lowercase.
 - Words are always separated by a single space.

 * @param {string} title 
 * @returns {string} 
 */
export function titleCase(title) {
    return title
        .split(" ")
        .map((e) => e.split("").map((f, i) => i === 0 ? f.toUpperCase() : f.toLowerCase()).join(""))
        .join(" ");
}