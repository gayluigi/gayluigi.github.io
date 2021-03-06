function closeModal(
	recipeContainer,
	closeBtn,
	modalContent,
	modalBg,
	screenLock
) {
	modalContent.removeChild(recipeContainer);
	modalContent.removeChild(closeBtn);

	modalBg.removeChild(modalContent);
	document.body.removeChild(modalBg);

	releaseScreenWakeLock(screenLock);
}

function modalizeRecipe(recipe) {
	return async function recipeOnClick() {
		var screenLock = await getScreenWakeLock();

		var recipeContainer = generateRecipeCard(recipe);
		recipeContainer.classList.add("modalized");
		// Prevent it from opening more modals on top
		// Also prevent bg click event propagation
		recipeContainer.onclick = (e) => e.stopPropagation();

		var closeBtn = document.createElement("img")
		closeBtn.className = "closeIcon modalCloseBtn";
		closeBtn.src = "./img/close-icon.svg";

		var modalContent = document.createElement("div");
		modalContent.className = "modalContent";
		modalContent.appendChild(closeBtn);
		modalContent.appendChild(recipeContainer);

		var modalBg = document.createElement("div");
		modalBg.className = "modalBg";
		modalBg.onclick = () => closeModal(
			recipeContainer,
			closeBtn,
			modalContent,
			modalBg,
			screenLock
		);

		modalBg.appendChild(modalContent);
		document.body.appendChild(modalBg);
	}
}