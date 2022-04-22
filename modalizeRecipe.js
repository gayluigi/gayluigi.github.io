function closeModal(container, closeBtn, bg) {
	closeBtn.className = "closeIcon modalCloseBtn";
	bg.removeChild(container);
	document.body.removeChild(bg);
}

function showCloseBtn(container, bg) {
	var [closeBtn] = container.getElementsByClassName("modalCloseBtn");
	closeBtn.className = "closeIcon modalCloseBtn modalCloseBtnShown";
	closeBtn.onclick = () => closeModal(container, closeBtn, bg);
	bg.onclick = () => closeModal(container, closeBtn, bg);
}

function modalizeRecipe(recipeContainer) {
	return function recipeOnClick() {
		var modalBg = document.createElement("div");
		modalBg.className = "modalBg";

		// Prevent it from opening more modals on top
		// Also prevent bg click event propagation
		recipeContainer.onclick = (e) => e.stopPropagation();

		showCloseBtn(recipeContainer, modalBg);

		modalBg.appendChild(recipeContainer);
		document.body.appendChild(modalBg);
	}
}