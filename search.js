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

	for (var i = 0; i < 5; i++) {
		var searchIngredient = document.getElementById("ingredient-" + i).value;
		if (searchIngredient) {
			var ingredientLookupRegex = new RegExp("\\b" + searchIngredient + "\\b", "ig");
			matches = matches.filter(({ ingredients }) =>
				ingredients.some((ingredient) =>
					ingredientLookupRegex.test(ingredient)
				)
			);
		}
	}

	var resultContainer = document.getElementById("results");
	resultContainer.innerHTML = "";
	var resultsSummaryContainer = document.getElementById("resultsSummary");
	if (matches.length == 0) {
		resultsSummaryContainer.innerHTML = "No cocktails match your search.";
	} else {
		matches
			.sort(() => Math.random() - 0.5)
			.forEach((recipe) => {
				var matchContainer = generateRecipeCard(recipe);
				matchContainer.onclick = modalizeRecipe(matchContainer);
				resultContainer.appendChild(matchContainer);
			});
		resultsSummaryContainer.innerHTML = `Found ${matches.length} cocktails.`;
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
	var recipeTitleContainers = document.getElementsByClassName("recipeTitle");
	balanceText(recipeTitleContainers);
};

submitBtn.onclick = search;