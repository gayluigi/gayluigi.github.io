function getLinkIconSvg() {
	var sourceLinkIconSvg = document.getElementById("linkSvg");
	var linkIconSvg = sourceLinkIconSvg.cloneNode(true);
	linkIconSvg.classList.remove("hiddenSvg");
	return linkIconSvg;
}

function getFormattedIngredient(ingredient, factor=1) {
	const multiplier = parseFloat(factor) || 1;
	var ingredientContainer = document.createElement('div');
	ingredientContainer.className = "ingredient";

	var measure = document.createElement("span");
	measure.className = "measure";
	var unit = document.createElement("span");
	unit.className = "unit";
	var rest = document.createElement("span");
	rest.classList.add("rest");

	var restContent = document.createElement("span");

	var regex = /^([\d\.\-]*)\s+(oz\.?|drops?|dash|bspn|tb?sps?|grams?|pints?|cups?)?\s*(.*)/i;
	var matches = ingredient.match(regex);
	if (matches && matches.length >= 4) {
		measure.innerHTML = Math.round(
			parseFloat(matches[1]) * multiplier * 1000
		) / 1000 || "";
		unit.innerHTML = matches[2] || "";
		restContent.innerHTML = matches[3] || "";
	} else {
		restContent.innerHTML = ingredient;
	}

	var matchingRecipe = recipes.find(({ name }) =>
		restContent.innerHTML.toLowerCase() === name.toLowerCase()
	);

	if (matchingRecipe) {
		var linkIcon = getLinkIconSvg();
		restContent.appendChild(linkIcon);
		restContent.onclick = modalizeRecipe(matchingRecipe);
		restContent.classList.add("recipeLink");
	}

	rest.appendChild(restContent);
	ingredientContainer.appendChild(measure);
	ingredientContainer.appendChild(unit);
	ingredientContainer.appendChild(rest);

	ingredientContainer.onclick = function applyStrikethrough() {
		var recipeContainer = ingredientContainer.parentNode.parentNode;
		if (recipeContainer.classList.contains("modalized")) {
			ingredientContainer.classList.toggle("strikethrough");
		}
	}
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

function isRecipeFavorite(recipe) {
	return FAVORITES.some(({ name }) => name === recipe.name);
}
function isRecipeNotFavorite(recipe) {
	return FAVORITES.every(({ name }) => name !== recipe.name)
}
function isRecipeCocktailOfTheDay({ name }) {
	return name === COCKTAIL_OF_DAY.name;
}
function isRecipeNotCocktailOfTheDay({ name }) {
	return name !== COCKTAIL_OF_DAY.name;
}

function setFavIconSrc(favIcon, recipe) {
	var favoriteIconUrl = isRecipeFavorite(recipe)
		? "./img/favorite-filled.svg"
		: "./img/favorite-empty.svg";
	favIcon.src = favoriteIconUrl;
}

function getFavoriteIcon(recipe) {
	var favIconContainer = document.createElement("div");
	favIconContainer.className = "favIconContainer";

	var favIcon = document.createElement("img");
	favIcon.className = "favIcon";
	setFavIconSrc(favIcon, recipe);

	favIcon.onclick = (e) => {
		// Prevent modal from opening
		e.stopPropagation();

		isRecipeFavorite(recipe)
			// From favorites.js
			? removeRecipeFromFavorites(recipe)
			: addRecipeToFavorites(recipe);

		setFavIconSrc(favIcon, recipe);
	}

	favIconContainer.appendChild(favIcon);
	return favIconContainer;
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
		+ "</h2></div>";

	recipeTopRow.appendChild(getFavoriteIcon(recipe));
	return recipeTopRow
}

function generateRecipeCard(recipe) {
	var recipeContainer = document.createElement('div');
	recipeContainer.className = "recipe";
	recipeContainer.appendChild(getRecipeTopRow(recipe));

	var ingredientsContainer = document.createElement("div");
	recipe.ingredients.forEach((ingredient) => {
		var formattedIngredient = getFormattedIngredient(ingredient);
		ingredientsContainer.appendChild(formattedIngredient);
	});

	recipeContainer.multiplyMeasures = function multiply(factor) {
		ingredientsContainer.innerHTML = "";
		recipe.ingredients.forEach((ingredient) => {
			var formattedIngredient = getFormattedIngredient(ingredient, factor);
			ingredientsContainer.appendChild(formattedIngredient);
		});
	};

	recipeContainer.appendChild(ingredientsContainer);

	var procedureContainer = document.createElement("div");
	procedureContainer.className = "procedure";
	procedureContainer.innerHTML = recipe.procedure;
	recipeContainer.appendChild(procedureContainer);
	recipeContainer.onclick = modalizeRecipe(recipe);

	if (isRecipeCocktailOfTheDay(recipe)) {
		applyCocktailOfTheDaySticker(recipeContainer);
	}
	return recipeContainer;
}