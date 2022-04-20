function getFormattedIngredient(ingredient) {
	var ingredientContainer = document.createElement('div');
	ingredientContainer.className = "ingredient";

	var measure = document.createElement("span");
	measure.className = "measure";
	var unit = document.createElement("span");
	unit.className = "unit";
	var rest = document.createElement("span");
	rest.className = "rest";

	var regex = /^([\d\.]*)\s+(oz\.?|drops?|dash(es)?|barspns?)?\s*(.*)/;
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