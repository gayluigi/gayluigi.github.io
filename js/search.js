var submitBtn = document.getElementById("submitIngredients");

function submitOnEnterPressed(event) {
	if (event.keyCode === 13) {
		event.preventDefault();
		submitBtn.click();
	}
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
	console.log(matches.length);

	for (var i = 0; i < 5; i++) {
		var searchIngredient = document.getElementById("ingredient-" + i).value;
		if (searchIngredient) {
			console.log({ searchIngredient });
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
		matches
			.sort(() => Math.random() - 0.5)
			.forEach((recipe) =>
				resultContainer.appendChild(generateRecipeCard(recipe))
			);
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
