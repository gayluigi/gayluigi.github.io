const TIME_TO_FINISH_SUGGESTION_BTN_INTERACTIONS = 200;

function getSuggestionsContainerLocationForInput(input) {
	return input.nextSibling?.nextSibling;
}

function removeSuggestions(input) {
	const suggestionsContainer = getSuggestionsContainerLocationForInput(input);
	if (suggestionsContainer) {
		window.setTimeout(() => suggestionsContainer.remove(), TIME_TO_FINISH_SUGGESTION_BTN_INTERACTIONS);
	}
}

function clearSuggestions(input) {
	const suggestionsContainer = getSuggestionsContainerLocationForInput(input);
	if (suggestionsContainer) {
		suggestionsContainer.innerHTML = "";
	}
}

function addSuggestionToContainer(input, onClick) {
	return function addSuggestion(suggestion, index) {
		const suggestionBtn = document.createElement("button");
		suggestionBtn.onclick = () => onClick(suggestion, index);
		suggestionBtn.className = "suggestion";
		suggestionBtn.innerHTML = "<img class='addSuggestion' src='./img/curved-arrow-left.svg' />"
			+ "<span>" + suggestion + "<span>";
		const suggestionsContainer = getSuggestionsContainerLocationForInput(input);
		if (suggestionsContainer) {
			suggestionsContainer.appendChild(suggestionBtn);
		}
	}
}

function generateIngredientSuggestions(input, inputValue) {
	clearSuggestions(input)
	const ingredientMatches = FUSE_INGREDIENT_SEARCH
		.search(inputValue)
		.slice(0, SUGGESTION_COUNT_LIMIT)
		.map(({ item }) => item)
		.map(toTitleCase);

	function onSuggestionClick(suggestion) {
		input.value = suggestion;
	}

	if (ingredientMatches.length > 0) {
		ingredientMatches.forEach(addSuggestionToContainer(input, onSuggestionClick));
	}
}

function generateNameSuggestions(input, inputValue) {
	clearSuggestions(input);

	const matchingRecipes = FUSE_NAME_SEARCH
		.search(inputValue)
		.slice(0, SUGGESTION_COUNT_LIMIT)
		.map(({ item }) => item);
		
	const nameMatches = matchingRecipes
		.map(({ name }) => name)
		.map(toTitleCase);

	function onSuggestionClick(suggestion, index) {
		const clickedRecipe = matchingRecipes[index];
		modalizeRecipe(clickedRecipe)();
	}

	if (nameMatches.length > 0) {
		nameMatches.forEach(addSuggestionToContainer(input, onSuggestionClick));
	}
}

function createSuggestionsContainer(input) {
	const suggestionsContainer = document.createElement("div");
	suggestionsContainer.classList.add("suggestionsContainer");
	const siblingAfterCloseIcon = getSuggestionsContainerLocationForInput(input);
	input.parentNode.insertBefore(suggestionsContainer, siblingAfterCloseIcon);
}
