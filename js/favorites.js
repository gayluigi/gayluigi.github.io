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
		resultsSummary.innerHTML = `Found ${FAVORITES.length} favorite cocktail${FAVORITES.length === 1 ? "" : "s"}.`
			+ "<p class='small'>If you un-favorite recipes here, click \"Show favorites\" again to update this list.</p>";

		const favoriteRecipes = [...FAVORITES] // [...copy] becasue .reverse() is destructive in-place
			.reverse(); // Somewhat chronologically descending
		layoutRecipes(favoriteRecipes);
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


// Favorites migration. Delete everything below later
const GLASSWARE = [
	{
		name: "absinthe",
		regex: /absinthe\s+glass/i
	},
	{
		name: "champagne",
		regex: /champagne\s+(glass|flute)/i
	},
	{
		name: "collins",
		regex: /collins/i
	},
	{
		name: "collins",
		regex: /fizz\s+glass/i
	},
	{
		name: "cordial",
		regex: /cordial\s+glass/i
	},
	{
		name: "coupe",
		regex: /coupe/i
	},
	{
		name: "doubleoldfashioned",
		regex: /double\s+old[\-\s]fashioned/i
	},
	// Order matters for these old fashioneds, regex below would
	// test true for anything that matches regex above.
	{
		name: "oldfashioned",
		regex: /old[\-\s]fashioned/i
	},
	{
		name: "goblet",
		regex: /goblet/i
	},
	{
		name: "highball",
		regex: /highball/i
	},
	{
		name: "hurricane",
		regex: /hurricane\s+glass/i
	},
	{
		name: "largesnifter",
		regex: /large\s+snifter/i
	},
	{
		name: "martini",
		regex: /martini\s+glass/i
	},
	{
		name: "pilsner",
		regex: /pilsner/i
	},
	{
		name: "pint",
		regex: /pint/i
	},
	{
		name: "rocks",
		regex: /rocks/i
	},
	{
		name: "snifter",
		regex: /snifter/i
	},
	{
		name: "toddy",
		regex: /toddy/i
	},
	{
		name: "wine",
		regex: /wine\s+glass/i
	},
	{
		name: "cocktail",
		regex: /cocktail\s+glass/i
	},
	{
		name: "tiki",
		regex: /tiki\s+(mug|glass)/i
	},
	{
		name: "tikibowl",
		regex: /(tiki|scorpion)\s+bowl/i
	},
	{
		name: "pineapple",
		regex: /hollowed.+pineapple/i
	},
	{
		name: "coconut",
		regex: /coconut\s+shell/i
	},
	{
		name: "julep",
		regex: /julep\s+cup/i
	},
	{
		name: "punch",
		regex: /punch\s+glass/i
	},
];
function getIngredientParts(ingredient) {
	if (typeof ingredient === "string") {
		const regex = /^([\d\.\-]*)\s+(oz\.?|drops?|dash|bspn|tb?sps?|grams?|pints?|cups?)?\s*(.*)/i;
		const ingredientParts = ingredient.match(regex);
		if (ingredientParts?.length === 4) {
			return ingredientParts;
		}
		return [null, null, null, ingredient];
	}
	return [null, ingredient.measure, ingredient.unit, ingredient.ingredient];
}
function getGlass({ procedure }) {
	const glass = GLASSWARE.find(({ regex }) =>
		regex.test(procedure)
	);
	if (glass) {
		return glass.name;
	}
	return null;
}
function migrateLegacyFavorites() {
	const fixedFavorites = FAVORITES
		.map(({ ingredients, ...recipe }) => ({
			...recipe,
			ingredients: ingredients
				.map(getIngredientParts)
				.map(([m, measure, unit, ingredient]) => ({
					measure,
					unit,
					ingredient,
				})),
			glass: getGlass(recipe),
		}));
	localStorage.setItem(FAVORITES_KEY, JSON.stringify(fixedFavorites));
	FAVORITES = fixedFavorites;
}
setTimeout(migrateLegacyFavorites, 2000);