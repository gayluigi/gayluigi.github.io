const allTokens = recipes.map((recipe) =>
	recipe.ingredients.map((ingredient) =>
		ingredient.split(" ")
	).flat()
)
.flat()
.filter((token) => !token.match(/^[\d\.]/))
.filter((token) => !unitsRegex.test(token))
.map((token) => token.toLowerCase());
const allTokensSet = new Set(allTokens);
const ingredientTokens = Array.from(allTokensSet);

const allNameTokens = recipes.map(
	({ name }) => name.split(" ")
)
.flat()
.map((token) => token.toLowerCase());

const allNameTokensSet = new Set(allNameTokens);
const nameTokens = Array.from(allNameTokensSet);

function getSuggestionsContainerLocationForInput(input) {
	return input.nextSibling?.nextSibling;
}

function removeSuggestions(input) {
	const suggestionsContainer = getSuggestionsContainerLocationForInput(input);
	if (suggestionsContainer) {
		suggestionsContainer.remove();
	}
}

function clearSuggestions(input) {
	const suggestionsContainer = getSuggestionsContainerLocationForInput(input);
	if (suggestionsContainer) {
		suggestionsContainer.innerHTML = "";
	}
}


function addSuggestionToContainer(input) {
	return function addSuggestion(token) {
		const suggestion = document.createElement("button");
		suggestion.onclick = () => { input.value = token };
		suggestion.className = "suggestion";
		suggestion.innerHTML = "<img class='addSuggestion' src='./img/curved-arrow-left.svg' />"
			+ "<span>" + token + "<span>";
		const suggestionsContainer = getSuggestionsContainerLocationForInput(input);
		if (suggestionsContainer) {
			suggestionsContainer.appendChild(suggestion);
		}
	}
}

function generateSuggestions(input, inputValue, tokens) {
	clearSuggestions(input)
	const matchingTokens = tokens.filter((token) =>
		token.startsWith(inputValue.toLowerCase())
	).slice(0, SUGGESTION_COUNT_LIMIT);
	if (matchingTokens.length > 0) {
		matchingTokens.forEach(addSuggestionToContainer(input));
	}
}

function createSuggestionsContainer(input) {
	const suggestionsContainer = document.createElement("div");
	suggestionsContainer.classList.add("suggestionsContainer");
	const siblingAfterCloseIcon = getSuggestionsContainerLocationForInput(input);
	input.parentNode.insertBefore(suggestionsContainer, siblingAfterCloseIcon);
}