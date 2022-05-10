var submitBtn = document.getElementById("submitIngredients");

function submitOnEnterPressed(event) {
	if (event.keyCode === 13) {
		event.preventDefault();
		submitBtn.click();
	}
}

function recipeIsFavorite(recipe) {
	return FAVORITES.some(({ name }) => name === recipe.name);
}
function recipeIsNotFavorite(recipe) {
	return FAVORITES.every(({ name }) => name !== recipe.name)
}
function recipeIsCocktailOfTheDay(recipe) {
	return recipe.name === COCKTAIL_OF_DAY.name;
}
function recipeIsNotCocktailOfTheDay(recipe) {
	return recipe.name !== COCKTAIL_OF_DAY.name;
}

function search() {
	var matches = [...recipes];

	var searchName = document.getElementById("recipeNameInput").value;
	if (searchName) {
		var recipeNameLookupRegex = new RegExp("\\b" + searchName + "\\b", "ig");
		matches = matches.filter(({ name }) =>
			recipeNameLookupRegex.test(name)
		);
	}

	for (var i = 0; i < 5; i++) {
		var searchIngredient = document.getElementById("ingredient-" + i).value;
		if (searchIngredient) {
			var ingredientLookupRegex = new RegExp("\\b" + searchIngredient + "\\b", "i");
			matches = matches.filter(({ ingredients, name }) =>
				ingredients.some((ingredient) =>
					ingredientLookupRegex.test(ingredient)
				)
			);
		}
	}

	var resultContainer = document.getElementById("results");
	resultContainer.innerHTML = "";
	var resultsSummary = document.getElementById("resultsSummary");
	document.getElementById("clearFavoritesActionContainer").classList.add("hidden");
	if (matches.length == 0) {
		resultsSummary.innerHTML = "No cocktails match your search.";
	} else {
		var matchingFavorites = matches
			.filter(recipeIsFavorite)
			.filter(recipeIsNotCocktailOfTheDay);
		var matchingCoctailOfTheDay = matches
			.filter(recipeIsCocktailOfTheDay);
		var otherMatches = matches
			.filter(recipeIsNotFavorite)
			.filter(recipeIsNotCocktailOfTheDay)
			.sort(() => Math.random() - 0.5);
		[...matchingFavorites, ...matchingCoctailOfTheDay, ...otherMatches]
			.map((recipe) => {
				var recipeCard = generateRecipeCard(recipe);
				if (recipeIsCocktailOfTheDay(recipe)) {
					applyCocktailOfTheDaySticker(recipeCard);
				}
				return recipeCard;
			})
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
};

submitBtn.onclick = search;
