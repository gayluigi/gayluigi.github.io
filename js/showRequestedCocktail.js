const urlParams = new URLSearchParams(window.location.search);
const requestedCocktail = urlParams.get("cocktail");

const requestedRecipe = recipes.find(
	({ name }) => name === requestedCocktail
);

if (requestedRecipe) {
	modalizeRecipe(requestedRecipe)();
}