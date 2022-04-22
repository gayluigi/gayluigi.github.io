function closeModal(container, bg) {
	bg.removeChild(container);
	document.body.removeChild(bg);
}

function modalizeRecipe(recipeContainer) {
	return function recipeOnClick() {
		var recipeContainerClone = recipeContainer.cloneNode(true);
		recipeContainerClone.className += " modalized";
		// Prevent it from opening more modals on top
		// Also prevent bg click event propagation
		recipeContainerClone.onclick = (e) => e.stopPropagation();

		var modalBg = document.createElement("div");
		modalBg.className = "modalBg";
		modalBg.onclick = () => closeModal(recipeContainerClone, modalBg);

		var [closeBtn] = recipeContainerClone.getElementsByClassName("modalCloseBtn");
		closeBtn.onclick = () => closeModal(recipeContainerClone, modalBg);

		modalBg.appendChild(recipeContainerClone);
		document.body.appendChild(modalBg);
	}
}