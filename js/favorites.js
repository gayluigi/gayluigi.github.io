var FAVORITES_KEY = "favorites";
var favoritesRaw = localStorage.getItem(FAVORITES_KEY);
var FAVORITES = favoritesRaw
	? JSON.parse(favoritesRaw)
	: [];

var EMPTY_FAVORITES_MSG = "You have no favorite cocktails."
	+ "<p class='small'>Click the star in the search results to add them to your favorites.</p>";

var resultsSummary = document.getElementById("resultsSummary");
var resultContainer = document.getElementById("results");

function addRecipeToFavorites(recipe) {
	var newFavorites = [...FAVORITES, recipe];
	localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
	FAVORITES = newFavorites;
}

function removeRecipeFromFavorites(recipe) {
	var newFavorites = FAVORITES.filter(({ name }) =>
		recipe.name !== name
	);
	localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
	FAVORITES = newFavorites;
}

function clearFavorites() {
	FAVORITES = [];
	localStorage.removeItem(FAVORITES_KEY);
	setTimeout(() => {
		resultsSummary.innerHTML = EMPTY_FAVORITES_MSG;
		document.getElementById("clearFavoritesActionContainer").classList.add("hidden");
		resultContainer.innerHTML = "";
	}, 200);
}
var clearFavoritesAction = document.getElementById("clearFavoritesAction");
clearFavoritesAction.onclick = clearFavorites;

function renderFavorites() {
	if (FAVORITES.length > 0) {
		resultContainer.innerHTML = "";
		resultsSummary.innerHTML = `Found ${FAVORITES.length} favorite cocktail${FAVORITES.length === 1 ? "" : "s"}.`
			+ "<p class='small'>If you un-favorite recipes here, click \"Show favorites\" again to update this list.</p>";
		document.getElementById("clearFavoritesActionContainer").classList.remove("hidden");

		[...FAVORITES] // [...copy] becasue .reverse() is destructive in-place
			.reverse() // Somewhat chronologically descending
			.forEach((recipe) =>
				resultContainer.appendChild(generateRecipeCard(recipe))
			);
	} else {
		resultsSummary.innerHTML = EMPTY_FAVORITES_MSG;
		resultContainer.innerHTML = "";
	}
}
var showFavoritesAction = document.getElementById("showFavoritesAction");
showFavoritesAction.onclick = renderFavorites;

var goBackAction = document.getElementById("backAction");
goBackAction.onclick = () => window.location.reload();