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
	return list;
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

	return getIncludeIngredientsMatches(filteredList, regexes, idx+1);
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

function handleResultsUi(matches) {
	const resultContainer = document.getElementById("results");
	resultContainer.innerHTML = "";
	const resultsSummary = document.getElementById("resultsSummary");
	document.getElementById("clearFavoritesActionContainer").classList.add("hidden");
	if (matches.length == 0) {
		resultsSummary.innerHTML = "No cocktails match your search.";
	} else {
		const matchingFavorites = matches
			.filter(isRecipeFavorite)
			.filter(isRecipeNotCocktailOfTheDay);
		const matchingCoctailOfTheDay = matches
			.filter(isRecipeCocktailOfTheDay);
		const otherMatches = matches
			.filter(isRecipeNotFavorite)
			.filter(isRecipeNotCocktailOfTheDay)
			.sort(() => Math.random() - 0.5);
		[...matchingFavorites, ...matchingCoctailOfTheDay, ...otherMatches]
			.map((recipe) => generateRecipeCard(recipe))
			.forEach((recipeCard) => resultContainer.appendChild(recipeCard));
		resultsSummary.innerHTML = `Found ${matches.length} cocktail${matches.length === 1 ? "" : "s"}.`;
	}

	// The following logic uses a library to
	// split text titles more intelligently.
	//
	// Instead of:
	// | CARAWAY MY WAYWARD |
	// |        SON         |
	//
	// the balanced break does:
	// |    CARAWAY MY      |
	// |    WAYWARD SON     |
	balanceText(".recipeTitle");
}

submitBtn.onclick = search;
