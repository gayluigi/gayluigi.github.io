let COCKTAIL_OF_DAY;

function applyCocktailOfTheDaySticker(recipeContainer) {
	const sticker = document.createElement("div");
	sticker.className = "cocktailOfTheDay";
	sticker.innerHTML = "Cocktail of the day";
	recipeContainer.prepend(sticker);
}

function generateCocktailOfTheDay() {
	const resultContainer = document.getElementById("results");
	const candidateRecipes = recipes
		.filter(({ isIngredient }) => !isIngredient);
	const numberForDay = getNumberForDay(candidateRecipes.length);
	COCKTAIL_OF_DAY = candidateRecipes[numberForDay];;
	const recipeContainer = generateRecipeCard(COCKTAIL_OF_DAY);
	resultContainer.appendChild(recipeContainer);
}

function hashNum(string) {
	//set variable hash as 0
	let hash = 0;
	// if the length of the string is 0, return 0
	if (string.length == 0) return hash;
	for (i = 0 ;i<string.length ; i++)
	{
	ch = string.charCodeAt(i);
	hash = ((hash << 5) - hash) + ch;
	hash = hash & hash;
	}
	return hash;
}

function getNumberForDay(upperBound) {
	const today = new Date();
	const dateString = `${today.getUTCFullYear()}${today.getUTCMonth()}${today.getUTCDate()}`;
	return Math.abs(hashNum(dateString) % upperBound);
}