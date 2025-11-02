/*
Email Sorter
On October 29, 1971, the first email ever was sent, introducing the 
username@domain format we still use. Now, there are billions of email addresses.

In this challenge, you are given a list of email addresses and need 
to sort them alphabetically by domain name first (the part after the @), 
and username second (the part before the @).
 
  * Sorting should be case-insensitive.
  * If more than one email has the same domain, sort them by their username.
  * Return an array of the sorted addresses.
  * Returned addresses should retain their original case.
For example, given ["jill@mail.com", "john@example.com", "jane@example.com"], 
return ["jane@example.com", "john@example.com", "jill@mail.com"].
*/

/**
 * Sorts a list of email addresses alphabetically by domain name first (the part after the @),
 * and username second (the part before the @).
 *
 * @param {Array<string>} emails - A list of email addresses
 * @return {Array<string>} - The sorted list of email addresses
 */
export function sort(emails) {
  let domains = emails.map((e) => e.split("@"));

  return domains
    .sort((a, b) => {
      if (a[1].toLowerCase() === b[1].toLowerCase())
        return b[0].toLowerCase().localeCompare(a[0].toLowerCase());
      return b[1].toLowerCase().localeCompare(a[1].toLowerCase());
    })
    .map((e) => e.join("@"))
    .reverse();
}
