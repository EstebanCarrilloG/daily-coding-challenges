/**
 Given a string and a target number, determine whether the string contains exactly the target number of consonants.

Consonants are all alphabetic characters except "a", "e", "i", "o", and "u" in any case.
Ignore digits, punctuation, spaces, and other non-letter characters when counting.

 * @param {string} text 
 * @param {number} target 
 * @returns {boolean}
 */
export function hasConsonantCount(text, target) {

    const regExp = /[aeiou0-9\W]/

    let counter = 0;
    for (let i = 0; i < text.length; i++) {
        if (!regExp.test(text[i])) counter++;
    }

    return target === counter;

}
