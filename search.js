var submitBtn = document.getElementById("submitIngredients");

function submitOnEnterPressed(event) {
	if (event.keyCode === 13) {
		event.preventDefault();
		submitBtn.click();
	}
}

function getFormattedIngredient(ingredient) {
	var ingredientContainer = document.createElement('div');
	ingredientContainer.className = "ingredient";

	var measure = document.createElement("span");
	measure.className = "measure";
	var unit = document.createElement("span");
	unit.className = "unit";
	var rest = document.createElement("span");
	rest.className = "rest";

	var regex = /^([\d\.\-]*)\s+(oz\.?|drops?|dash(es)?|barspns?)?\s*(.*)/;
	var matches = ingredient.match(regex);
	if (matches && matches.length >= 5) {
		measure.innerHTML = matches[1] || "";
		unit.innerHTML = matches[2] || "";
		rest.innerHTML = matches[4] || "";
	} else {
		rest.innerHTML = ingredient;
	}

	ingredientContainer.appendChild(measure);
	ingredientContainer.appendChild(unit);
	ingredientContainer.appendChild(rest);
	return ingredientContainer;
}

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
	if (matches.length == 0) {
		resultsSummaryContainer.innerHTML = "No cocktails match your search.";
	} else {
		matches
			.sort(() => Math.random() - 0.5)
			.forEach((recipe) => {
				var matchContainer = document.createElement('div');
				matchContainer.className = "match";
				matchContainer.innerHTML = "<div class='recipeTopRow'>"
					+ "<div><h2 class='recipeTitle'>" + recipe.name.toUpperCase() + "</h2></div>"
					+ "<img class='closeIcon modalCloseBtn' src='close-icon.svg'/>"
					+ "</div>";
				recipe.ingredients.forEach((ingredient) => {
					var formattedIngredient = getFormattedIngredient(ingredient);
					matchContainer.appendChild(formattedIngredient);
				});
				matchContainer.innerHTML += "<div class='procedure'>" + recipe.procedure + "</div>";
				matchContainer.onclick = modalizeRecipe(matchContainer);
				resultContainer.appendChild(matchContainer);
			});
		resultsSummaryContainer.innerHTML = `Found ${matches.length} cocktails.`;
	}
};

submitBtn.onclick = search;