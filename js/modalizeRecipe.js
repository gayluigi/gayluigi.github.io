function closeAllModals() {
	var modal = document.getElementById("modal");
	if (modal) {
		document.body.removeChild(modal);
	}
}

function modalizeRecipe(recipe) {
	return function recipeOnClick() {
		closeAllModals();

		var recipeContainer = generateRecipeCard(recipe);
		recipeContainer.classList.add("modalized");
		// Prevent it from opening more modals on top
		// Also prevent bg click event propagation
		recipeContainer.onclick = (e) => e.stopPropagation();

		var closeBtn = document.createElement("img")
		closeBtn.className = "closeIcon modalCloseBtn";
		closeBtn.src = "./img/close-icon.svg";

		var multiplier = getMultiplierComponent(recipeContainer);

		var modalContent = document.createElement("div");
		modalContent.className = "modalContent";
		modalContent.appendChild(closeBtn);
		modalContent.appendChild(recipeContainer);
		modalContent.appendChild(multiplier);

		var modalBg = document.createElement("div");
		modalBg.className = "modalBg";
		modalBg.id = "modal";
		// Prevent it from opening more modals on top
		// Also prevent bg click event propagation
		modalBg.onclick = (e) => e.stopPropagation();
		modalBg.appendChild(modalContent);

		closeBtn.onclick = closeAllModals;
		document.body.appendChild(modalBg);
	}
}