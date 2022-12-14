const BASE_10_RADIX = 10;
const RECIPE_WIDTH_WITH_MARGIN = 10 + 360 + 10;

function getResultsColumns(resultContainer) {
	const containerWidth = resultContainer.clientWidth;
	const numCols = Number.parseInt(
		containerWidth / RECIPE_WIDTH_WITH_MARGIN,
		BASE_10_RADIX
	);
	return [...Array(numCols)].map(() => document.createElement("div"));
}

function getShortestColumn(columns) {
	return columns.reduce((shortestColIdx, column, idx) => {
		if (column.scrollHeight < columns[shortestColIdx].scrollHeight) {
			return idx;
		}
		return shortestColIdx;
	}, 0);
}

function appendResultToColumn(columns) {
	return function appendResult(recipeCard, idx) {
		const shortestColIdx = getShortestColumn(columns);
		columns[shortestColIdx].appendChild(recipeCard);
	};
}

function handleResultsUi(matches) {
	const resultContainer = document.getElementById("results");
	resultContainer.innerHTML = "";
	const resultsSummary = document.getElementById("resultsSummary");
	document.getElementById("clearFavoritesActionContainer").classList.add("hidden");
	if (matches.length == 0) {
		resultsSummary.innerHTML = "No cocktails match your search.";
	} else {
		resultsColumns = getResultsColumns(resultContainer);
		resultsColumns.forEach((resultCol) => resultContainer.appendChild(resultCol));

		const matchingFavorites = matches
			.filter(isRecipeFavorite)
			.filter(isRecipeNotCocktailOfTheDay);
		const matchingCoctailOfTheDay = matches
			.filter(isRecipeCocktailOfTheDay);
		const otherMatches = matches
			.filter(isRecipeNotFavorite)
			.filter(isRecipeNotCocktailOfTheDay)
			.sort(() => Math.random() - 0.5);
		[...matchingFavorites, ...matchingCoctailOfTheDay, ...otherMatches]
			.map((recipe) => generateRecipeCard(recipe))
			.forEach(appendResultToColumn(resultsColumns));
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
}