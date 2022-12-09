function getIngredientParts(ingredient) {
	const regex = /^([\d\.\-]*)\s+(oz\.?|drops?|dash|bspn|tb?sps?|grams?|pints?|cups?)?\s*(.*)/i;
	return ingredient.match(regex);
}

function getIngredientsFromRecipe({ ingredients }) {
	return ingredients
		.map(getIngredientParts)
		.filter(Boolean)
		.map((parts) => parts[3] || null)
		.filter(Boolean);
}