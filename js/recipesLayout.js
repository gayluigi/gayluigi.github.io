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

var timer;
function layoutRecipes(recipes) {
	window.onresize = function () {
		clearTimeout(timer);
		timer = setTimeout(
			() => layoutRecipes(recipes),
			500
		);
	};

	const resultContainer = document.getElementById("results");
	resultContainer.innerHTML = "";

	resultsColumns = getResultsColumns(resultContainer);
	resultsColumns.forEach((resultCol) => resultContainer.appendChild(resultCol));

	recipes
		.map(generateRecipeCard)
		.forEach(appendResultToColumn(resultsColumns));

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