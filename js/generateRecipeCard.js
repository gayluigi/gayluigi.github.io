function getLinkIconSvg() {
	const sourceLinkIconSvg = document.getElementById("linkSvg");
	const linkIconSvg = sourceLinkIconSvg.cloneNode(true);
	linkIconSvg.classList.remove("hiddenSvg");
	return linkIconSvg;
}

function getFormattedIngredient({ measure, unit, ingredient }, factor=1) {
	const multiplier = parseFloat(factor) || 1;
	const ingredientContainer = document.createElement('div');
	ingredientContainer.className = "ingredient";

	const measureSpan = document.createElement("span");
	measureSpan.className = "measure";
	const unitSpan = document.createElement("span");
	unitSpan.className = "unit";
	const ingredientSpan = document.createElement("span");
	ingredientSpan.classList.add("ingredient");

	measureSpan.innerHTML = Math.round(
		measure * multiplier * 1000
	) / 1000 || "";
	unitSpan.innerHTML = unit || "";
	ingredientSpan.innerHTML = ingredient || "";

	const matchingRecipe = recipes.find(({ name }) =>
		ingredientSpan.innerHTML.toLowerCase() === name.toLowerCase()
	);

	if (matchingRecipe) {
		const linkIcon = getLinkIconSvg();
		ingredientSpan.appendChild(linkIcon);
		ingredientSpan.onclick = modalizeRecipe(matchingRecipe);
		ingredientSpan.classList.add("recipeLink");
	}

	ingredientContainer.appendChild(measureSpan);
	ingredientContainer.appendChild(unitSpan);
	ingredientContainer.appendChild(ingredientSpan);

	ingredientContainer.onclick = function applyStrikethrough() {
		const recipeContainer = ingredientContainer.parentNode.parentNode;
		if (recipeContainer.classList.contains("modalized")) {
			ingredientContainer.classList.toggle("strikethrough");
		}
	}
	return ingredientContainer;
}

function getGlassIconUrl({ procedure }) {
	const GLASSWARE_PREFIX = "./img/glassware/";
	const glass = GLASSWARE.find(({ regex }) =>
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
	const favoriteIconUrl = isRecipeFavorite(recipe)
		? "./img/favorite-filled.svg"
		: "./img/favorite-empty.svg";
	favIcon.src = favoriteIconUrl;
}

function getFavoriteIcon(recipe) {
	const favIconContainer = document.createElement("div");
	favIconContainer.className = "favIconContainer";

	const favIcon = document.createElement("img");
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
	const recipeTopRow = document.createElement("div");
	recipeTopRow.className = "recipeTopRow";

	const glassIconUrl = getGlassIconUrl(recipe);
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
	const recipeContainer = document.createElement('div');
	recipeContainer.className = "recipe";
	recipeContainer.appendChild(getRecipeTopRow(recipe));

	const ingredientsContainer = document.createElement("div");
	recipe.ingredients.forEach((ingredient) => {
		const formattedIngredient = getFormattedIngredient(ingredient);
		ingredientsContainer.appendChild(formattedIngredient);
	});

	recipeContainer.multiplyMeasures = function multiply(factor) {
		ingredientsContainer.innerHTML = "";
		recipe.ingredients.forEach((ingredient) => {
			const formattedIngredient = getFormattedIngredient(ingredient, factor);
			ingredientsContainer.appendChild(formattedIngredient);
		});
	};

	recipeContainer.appendChild(ingredientsContainer);

	const procedureContainer = document.createElement("div");
	procedureContainer.className = "procedure";
	procedureContainer.innerHTML = recipe.procedure;
	recipeContainer.appendChild(procedureContainer);
	recipeContainer.onclick = modalizeRecipe(recipe);

	if (isRecipeCocktailOfTheDay(recipe)) {
		applyCocktailOfTheDaySticker(recipeContainer);
	}
	return recipeContainer;
}