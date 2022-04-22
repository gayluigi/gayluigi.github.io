console.log(unitsRegex);

var allTokens = recipes.map((recipe) =>
	recipe.ingredients.map((ingredient) =>
		ingredient.split(" ")
	).flat()
)
.flat()
.filter((token) => !token.match(/^[\d\.]/))
.filter((token) => !unitsRegex.test(token))
.map((token) => token.toLowerCase());

var allTokensSet = new Set(allTokens);
var ingredientTokens = Array.from(allTokensSet);

var suggestionsContainer = document.getElementById("suggestions");

function clearSuggestions() {
	suggestionsContainer.innerHTML = "";
}

function addSuggestionToInput(input) {
	return function addSuggestion(token) {
		var suggestion = document.createElement("button");
		suggestion.onclick = () => { input.value = token };
		suggestion.className = "suggestion";
		suggestion.innerHTML = "<span class='addSuggestion'> &#11207; </span>"
			+ "<span>" + token + "<span>";
		suggestionsContainer.appendChild(suggestion);
	}
}

function generateSuggestions(input, inputValue, ingredientTokens) {
	clearSuggestions();
	var matchingTokens = ingredientTokens.filter((token) =>
		token.startsWith(inputValue.toLowerCase())
	).slice(0, SUGGESTION_COUNT_LIMIT);
	if (matchingTokens.length > 0) {
		var suggestionHdr = document.createElement("div");
			suggestionHdr.className = "suggestionHeader";
			suggestionHdr.innerHTML = "Suggestions:";
			suggestionsContainer.appendChild(suggestionHdr);
		matchingTokens.forEach(addSuggestionToInput(input));
	}
}