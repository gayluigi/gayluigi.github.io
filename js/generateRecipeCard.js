function getFormattedIngredient(ingredient) {
	var ingredientContainer = document.createElement('div');
	ingredientContainer.className = "ingredient";

	var measure = document.createElement("span");
	measure.className = "measure";
	var unit = document.createElement("span");
	unit.className = "unit";
	var rest = document.createElement("span");
	rest.className = "rest";

	var regex = /^([\d\.\-]*)\s+(oz\.?|drops?|dash(es)?|barspns?|tb?sps?|grams?|pints?|cups?)?\s*(.*)/i;
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

function getGlassIconUrl({ procedure }) {
	var GLASSWARE_PREFIX = "./img/glassware/";
	var glass = GLASSWARE.find(({ regex }) =>
		regex.test(procedure)
	);
	if (glass) {
		return GLASSWARE_PREFIX + glass.name + ".png";
	}
	return null;
}

function getRecipeTopRow(recipe) {
	var recipeTopRow = document.createElement("div");
	recipeTopRow.className = "recipeTopRow";

	var glassIconUrl = getGlassIconUrl(recipe);
	if (glassIconUrl) {
		recipeTopRow.innerHTML = `<img class='glassIcon' src='${glassIconUrl}' />`;
	} else {
		recipeTopRow.innerHTML = "<div class='glassIcon'/>";
	}

	recipeTopRow.innerHTML += "<div class='recipeTilteContainer'>"
		+ "<h2 class='recipeTitle'>"
		+ recipe.name.toUpperCase()
		+ "</h2></div>"
		+ "<div class='favIconContainer'>"
		+ "<img class='favIcon' src='favicon.svg'/>"
		+ "</div>";

	return recipeTopRow
}

function generateRecipeCard(recipe) {
	var recipeContainer = document.createElement('div');
	recipeContainer.className = "recipe";

	recipeContainer.appendChild(getRecipeTopRow(recipe));
	recipe.ingredients.forEach((ingredient) => {
		var formattedIngredient = getFormattedIngredient(ingredient);
		recipeContainer.appendChild(formattedIngredient);
	});

	var procedureContainer = document.createElement("div");
	procedureContainer.className = "procedure";
	procedureContainer.innerHTML = recipe.procedure;
	recipeContainer.appendChild(procedureContainer);
	recipeContainer.onclick = modalizeRecipe(recipeContainer);
	return recipeContainer;
}