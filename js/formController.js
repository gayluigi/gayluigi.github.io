function areAllFieldsFilledIn(className) {
	const fields = document.getElementsByClassName(className);
	return [...fields].every(({ value }) => value);
}

function addNewIngredientInput(input, ingredientType) {
	if (areAllFieldsFilledIn(ingredientType)) {
		const nextIndex = parseInt(input.id.slice(-1)) + 1
		const nextRowId = `${ingredientType}Row-${nextIndex}`;
		const nextInputId = `${ingredientType}-${nextIndex}`;

		const newInputRow = document.createElement("div");
		newInputRow.id = nextRowId;
		newInputRow.classList.add("inputRow");
		
		const newInput = document.createElement("input");
		newInput.id = nextInputId;
		newInput.classList.add(ingredientType);
		newInput.type = "text";
		newInput.placeholder = "Ingredient";
		newInput.onkeyup = onIngredientInputChange;
		newInput.onfocus = () => createSuggestionsContainer(newInput);
		newInput.onblur = () => removeSuggestions(newInput);
		newInputRow.appendChild(newInput);
		
		const newCloseIcon = document.createElement("img");
		newCloseIcon.classList.add("closeIcon");
		newCloseIcon.src = "./img/close-icon.svg";
		newCloseIcon.onclick = () => {
			newInputRow.innerHTML = "";
			newInputRow.remove();
		};
		newInputRow.appendChild(newCloseIcon);

		document.getElementById(`${ingredientType}sContainer`).appendChild(newInputRow);
	}
}

function onIngredientInputChange(event) {
	submitOnEnterPressed(event);
	const input = event.target;
	const [ingredientType] = input.classList;
	const inputValue = input.value;
	if (inputValue.length > 1) {
		generateIngredientSuggestions(input, inputValue);
		addNewIngredientInput(input, ingredientType);
	}
}

function onRecipeNameInputChange(event) {
	submitOnEnterPressed(event);
	const input = event.target;
	const inputValue = input.value;
	if (inputValue.length > 1) {
		generateNameSuggestions(input, inputValue);
	}
}

function clearInput(id) {
	document.getElementById(id).value = "";
}