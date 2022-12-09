function closeAllModals() {
	const modal = document.getElementById("modal");
	if (modal) {
		document.body.removeChild(modal);
	}
}

function getActionRow(recipeName) {
	const actionRow = document.createElement("div");
	actionRow.className = "modalActionRow";

	const recipeLink = `${window.location.host}?cocktail=${encodeURIComponent(recipeName)}`;
	const shareBtn = document.createElement("button")
	shareBtn.className = "modalAction copyAction";
	shareBtn.innerHTML = "Copy link";
	shareBtn.onclick = async () => {
		shareBtn.innerHTML = "&check; Copied";
		const { state } = await navigator.permissions.query({ name: "clipboard-write" });
		if (state == "granted" || state == "prompt") {
			await navigator.clipboard.writeText(recipeLink);
		}
	};

	const closeBtn = document.createElement("img")
	closeBtn.className = "modalAction closeIcon";
	closeBtn.src = "./img/close-icon.svg";
	closeBtn.onclick = closeAllModals;

	actionRow.appendChild(shareBtn);
	actionRow.appendChild(closeBtn);

	return actionRow;
}

function modalizeRecipe(recipe) {
	return function recipeOnClick() {
		closeAllModals();

		const recipeContainer = generateRecipeCard(recipe);
		recipeContainer.classList.add("modalized");
		// Prevent it from opening more modals on top
		// Also prevent bg click event propagation
		recipeContainer.onclick = (e) => e.stopPropagation();

		const actionRow = getActionRow(recipe.name);

		const multiplier = getMultiplierComponent(recipeContainer);

		const modalContent = document.createElement("div");
		modalContent.className = "modalContent";
		modalContent.appendChild(actionRow);
		modalContent.appendChild(recipeContainer);
		modalContent.appendChild(multiplier);

		const modalBg = document.createElement("div");
		modalBg.className = "modalBg";
		modalBg.id = "modal";
		// Prevent it from opening more modals on top
		// Also prevent bg click event propagation
		modalBg.onclick = (e) => e.stopPropagation();
		modalBg.appendChild(modalContent);

		document.body.appendChild(modalBg);
	}
}