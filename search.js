function search() {
	var matches = [...recipes];

	var searchName = document.getElementById("recipeNameInput").value;
	if (searchName) {
		var recipeNameLookupRegex = new RegExp("\\b" + searchName + "\\b", "i");
		matches = matches.filter((recipe) =>
			recipeNameLookupRegex.test(recipe.name)
		);
	}

	for (var i = 0; i < 5; i++) {
		var searchIngredient = document.getElementById("ingredient-" + i).value;
		if (searchIngredient) {
			var ingredientLookupRegex = new RegExp("\\b" + searchIngredient + "\\b", "i");
			matches = matches.filter((recipe) =>
				recipe.ingredients.some((ingredient) =>
					ingredientLookupRegex.test(ingredient)
				)
			);
		}
	}

	var resultContainer = document.getElementById("results");
	resultContainer.innerHTML = "";
	var resultsSummaryContainer = document.getElementById("resultsSummary");
	resultsSummaryContainer.innerHTML = "";
	var resultsSummary = document.createElement("div");
	resultsSummary.className = "resultsSummaryContent";
	if (matches.length == 0) {
		resultsSummary.innerHTML = "No cocktails match your search.";
	} else {
		matches
			.sort(() => Math.random() - 0.5)
			.forEach((recipe) => {
				var matchContainer = document.createElement('div');
				matchContainer.className = "match";
				matchContainer.innerHTML += "<h2 class='recipeTitle'>" + recipe.name.toUpperCase() + "</h2>";
				recipe.ingredients.forEach((ingredient) => {
					var formattedIngredient = getFormattedIngredient(ingredient);
					matchContainer.appendChild(formattedIngredient);
				});
				matchContainer.innerHTML += "<div class='procedure'>" + recipe.procedure + "</div>";
				resultContainer.appendChild(matchContainer);
			});
		resultsSummary.innerHTML = `Found ${matches.length} cocktails.`;
	}
	resultsSummaryContainer.appendChild(resultsSummary);
};