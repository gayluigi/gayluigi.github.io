var CHANGE_STEP = 0.25;
var CHANGE_STEP_INVERSE = 1/CHANGE_STEP;

function multiplierOnchange(recipeContainer, appendX) {
	return function multiplyRecipeMeasures(event) {
		var parsedValue = parseFloat(event.target.value);
		recipeContainer.multiplyMeasures(parsedValue);
		if (appendX) {
			event.target.value = `${parsedValue}x`;
		}
	};
}

function increaseMultiplier(input) {
	return function increaseInputValue() {
		var value = parseFloat(input.value);
		var roundedUpValue = Math.ceil(value * CHANGE_STEP_INVERSE) / CHANGE_STEP_INVERSE;
		if (roundedUpValue === value) {
			input.value = value + CHANGE_STEP;
		} else {
			input.value = roundedUpValue;
		}
		input.dispatchEvent(new Event('change'));
	}
}

function decreaseMultiplier(input) {
	return function decreaseInputValue() {
		var value = parseFloat(input.value);
		if (value > CHANGE_STEP) {
			var roundedDownValue = Math.floor(value * CHANGE_STEP_INVERSE) / CHANGE_STEP_INVERSE;
			if (roundedDownValue === value) {
				input.value = value - CHANGE_STEP;
			} else {
				input.value = roundedDownValue;
			}
			input.dispatchEvent(new Event('change'));
		}
	}
}

function getMultiplierComponent(recipeContainer) {
	var container = document.createElement("div");
	container.classList.add("multiplier");

	var input = document.createElement("input");
	input.value = "1x";
	input.onchange = multiplierOnchange(recipeContainer, true);
	input.onkeypress = multiplierOnchange(recipeContainer, false);
	input.onpaste = multiplierOnchange(recipeContainer, false);
	input.oninput = multiplierOnchange(recipeContainer, false);

	var minusBtn = document.createElement("button");
	minusBtn.onclick = decreaseMultiplier(input);
	minusBtn.innerHTML = "-";
	var plusBtn = document.createElement("button");
	plusBtn.onclick = increaseMultiplier(input);
	plusBtn.innerHTML = "+";

	container.appendChild(minusBtn);
	container.appendChild(input);
	container.appendChild(plusBtn);
	return container;
}