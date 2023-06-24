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

function getThemeMatches(list) {
	const searchTheme = document.getElementById("themeInput").value;
	if (searchTheme) {
		const themeRegex = new RegExp("\\b" + searchTheme + "\\b", "i");
		return list.filter(
			({ themes }) => themes.some(
				(theme) => themeRegex.test(theme)
			)
		);
	}
	return list;
}

function getIngredientRegexes(ingredientType) {
	const ingredientRegexes = document.getElementsByClassName(ingredientType);
	return [...ingredientRegexes]
		.filter(({ value }) => value)
		.map(({ value }) => new RegExp("\\b" + value + "\\b", "i"));
}

function getIncludeIngredientsMatches(regexes) {
	return function getMatches(list) {
		const nonEmptyRegexes = regexes.filter(Boolean);
		if (nonEmptyRegexes.length > 0) {
			return list.filter(
				({ ingredients }) => regexes.every(
					(regex ) => ingredients.some(
						({ ingredient }) => regex.test(ingredient)
					)
				)
			);
		}
		return list;
	}
}

function getExcludeIngredientsMatches(regexes) {
	return function getMatches(list) {
		const nonEmptyRegexes = regexes.filter(Boolean);
		if (nonEmptyRegexes.length > 0) {
			return list.filter(
				({ ingredients }) => ingredients.every(
					({ ingredient }) => !regexes.some(
						(regex) => regex.test(ingredient)
					)
				)
			);
		}
		return list;
	}
}

function search() {
	const includeIngredientRegexes =
		getIngredientRegexes(INGREDIENT_TYPE.INCLUDE);
	const excludeIngredientRegexes =
		getIngredientRegexes(INGREDIENT_TYPE.EXCLUDE);
	
	const searchFn = pipe(
		getNameMatches,
		getIncludeIngredientsMatches(includeIngredientRegexes),
		getExcludeIngredientsMatches(excludeIngredientRegexes),
		getThemeMatches
	);
	const matches = searchFn();

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
		const recipes = [
			...matchingFavorites,
			...matchingCoctailOfTheDay,
			...otherMatches
		];
		layoutRecipes(recipes);
		resultsSummary.innerHTML = `Found ${matches.length} cocktail${matches.length === 1 ? "" : "s"}.`;
	}
};

submitBtn.onclick = search;
