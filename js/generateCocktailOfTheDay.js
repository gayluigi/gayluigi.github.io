function generateCocktailOfTheDay() {
	var resultContainer = document.getElementById("results");
	var recipe = recipes[getNumberForDay(recipes.length)];
	var recipeContainer = generateRecipeCard(recipe);
	resultContainer.appendChild(recipeContainer);
}

function hashNum(string) {
	//set variable hash as 0
	var hash = 0;
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
	var today = new Date();
	var dateString = `${today.getUTCFullYear()}${today.getUTCMonth()}${today.getUTCDate()}`;
	return Math.abs(hashNum(dateString) % upperBound);
}