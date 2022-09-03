const FAVORITES_KEY = "favorites";
const favoritesRaw = localStorage.getItem(FAVORITES_KEY);
let FAVORITES = favoritesRaw
	? JSON.parse(favoritesRaw)
	: [];

const EMPTY_FAVORITES_MSG = "You have no favorite cocktails."
	+ "<p class='small'>Click the star in the search results to add them to your favorites.</p>";

const resultsSummary = document.getElementById("resultsSummary");
const resultContainer = document.getElementById("results");

function addRecipeToFavorites(recipe) {
	const newFavorites = [...FAVORITES, recipe];
	localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
	FAVORITES = newFavorites;
}

function removeRecipeFromFavorites(recipe) {
	const newFavorites = FAVORITES.filter(({ name }) =>
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
		document.getElementById("clearFavoritesAction").classList.add("hidden");
		resultContainer.innerHTML = "";
	}, 200);
}
const clearFavoritesAction = document.getElementById("clearFavoritesAction");
clearFavoritesAction.onclick = clearFavorites;

function renderFavorites() {
	document.getElementById("clearFavoritesActionContainer").classList.remove("hidden");
	if (FAVORITES.length > 0) {
		resultContainer.innerHTML = "";
		resultsSummary.innerHTML = `Found ${FAVORITES.length} favorite cocktail${FAVORITES.length === 1 ? "" : "s"}.`
			+ "<p class='small'>If you un-favorite recipes here, click \"Show favorites\" again to update this list.</p>";

		[...FAVORITES] // [...copy] becasue .reverse() is destructive in-place
			.reverse() // Somewhat chronologically descending
			.forEach((recipe) =>
				resultContainer.appendChild(generateRecipeCard(recipe))
			);
	} else {
		document.getElementById("clearFavoritesAction").classList.add("hidden");
		resultsSummary.innerHTML = EMPTY_FAVORITES_MSG;
		resultContainer.innerHTML = "";
	}
}
const showFavoritesAction = document.getElementById("showFavoritesAction");
showFavoritesAction.onclick = renderFavorites;

const goBackAction = document.getElementById("backAction");
goBackAction.onclick = () => window.location.reload();