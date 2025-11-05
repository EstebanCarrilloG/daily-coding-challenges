/* 
Image Search

On November 4th, 2001, Google launched its image search, 
allowing people to find images using search terms. 
In this challenge, you will imitate the image search.

Given an array of image names and a search term, return an array of image names containing the search term.

Ignore the case when matching the search terms.
Return the images in the same order they appear in the input array.

*/

/**
 * Returns an array of image names containing the search term.
 * Ignores the case when matching the search terms.
 * Returns the images in the same order they appear in the input array.
 * @param {Array<string>} images - An array of image names.
 * @param {string} term - The search term.
 * @returns {Array<string>} An array of image names containing the search term.
 */
export function imageSearch(images, term) {
  return images.filter((e) => e.toLowerCase().includes(term.toLowerCase()));
}
