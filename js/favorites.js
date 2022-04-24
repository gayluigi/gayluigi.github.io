console.log(localStorage);


function renderFavorites() {
	var favorites = localStorage.getItem("favorites");
	console.log({favorites});
	var resultsSummaryContainer = document.getElementById("resultsSummary");
	var resultContainer = document.getElementById("results");

	if (favorites?.length > 0) {

	} else {
		resultsSummaryContainer.innerHTML = "You have no favorite cocktails.";
		resultContainer.innerHTML = "";
	}
}

var showFavoritesAction = document.getElementById("showFavoritesAction");
showFavoritesAction.onclick = renderFavorites;