const INGREDIENT_TYPE = {
	INCLUDE: "includeIngredient",
	EXCLUDE: "excludeIngredient",
};

const submitBtn = document.getElementById("submitIngredients");

function submitOnEnterPressed(event) {
	if (event.keyCode === 13) {
		event.preventDefault();
		submitBtn.click();
	}
}

function getNameMatches() {
	const searchName = document.getElementById("recipeNameInput").value;
	if (searchName) {
		return FUSE_NAME_SEARCH
			.search(searchName)
			.map(({ item }) => item);
	}
	return recipes;
}

function getIngredientRegexes(ingredientType) {
	const includeIngredientInputs = document.getElementsByClassName(ingredientType);
	return [...includeIngredientInputs]
		.filter(({ value }) => value)
		.map(({ value }) => new RegExp("\\b" + value + "\\b", "i"));
}

function getIncludeIngredientsMatches(list, regexes, idx) {
	const ingredientLookupRegex = regexes[idx];
	if (!ingredientLookupRegex) {
		return list;
	}
	const filteredList = list
		.filter(({ ingredients }) => ingredients.some((ingredient) =>
		ingredientLookupRegex.test(ingredient)
	));

	return getIncludeIngredientsMatches(filteredList, regexes, idx + 1);
}

function getExcludeIngredientsMatches(list, regexes, idx) {
	const ingredientLookupRegex = regexes[idx];
	if (!ingredientLookupRegex) {
		return list;
	}

	const filteredList = list
		.filter(({ ingredients }) => ingredients.every((ingredient) =>
		!ingredientLookupRegex.test(ingredient)
	));

	return getExcludeIngredientsMatches(filteredList, regexes, idx+1);
}

function search() {
	const nameMatches = getNameMatches();

	const includeIngredientRegexes = getIngredientRegexes(INGREDIENT_TYPE.INCLUDE);
	const includeIngredientsMatches = getIncludeIngredientsMatches(nameMatches, includeIngredientRegexes, 0);

	const excludeIngredientRegexes = getIngredientRegexes(INGREDIENT_TYPE.EXCLUDE);
	const excludeIngredientsMatches = getExcludeIngredientsMatches(includeIngredientsMatches, excludeIngredientRegexes, 0);

	handleResultsUi(excludeIngredientsMatches);
};

submitBtn.onclick = search;
