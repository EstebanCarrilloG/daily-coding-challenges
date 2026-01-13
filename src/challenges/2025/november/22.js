/**
 * Scale a recipe by a given factor.
 *
 * This function takes an array of strings representing a recipe and a number
 * representing the scale factor. It returns a new array of strings with
 * the ingredient quantities scaled by the given factor.
 *
 * @param {Array<string>} ingredients - An array of strings, each representing
 *   a single ingredient in the recipe. Each string should be in the format
 *   "quantity ingredient-name".
 * @param {number} scale - The scale factor to apply to the recipe.
 * @returns {Array<string>} - A new array of strings with the scaled ingredient
 *   quantities.
 */
export function scaleRecipe(ingredients, scale) {
  return ingredients.map((ingredient) => {
    let j = ingredient.split(" ");
    j[0] = j[0] * scale;
    return j.join(" ");
  });
}
