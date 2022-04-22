function closeModal(container, containerClassName, closeBtn, bg) {
	container.className = containerClassName;
	closeBtn.className = "closeIcon modalCloseBtn";
	bg.removeChild(container);
	document.body.removeChild(bg);
}

function showCloseBtn(container, containerClassName, bg) {
	var [closeBtn] = container.getElementsByClassName("modalCloseBtn");
	closeBtn.className = "closeIcon modalCloseBtn modalCloseBtnShown";
	closeBtn.onclick = () => closeModal(container, containerClassName, closeBtn, bg);
	bg.onclick = () => closeModal(container, containerClassName, closeBtn, bg);
}

function modalizeRecipe(recipeContainer) {
	return function recipeOnClick() {
		var modalBg = document.createElement("div");
		modalBg.className = "modalBg";

		var recipeContainerClassName = recipeContainer.className;
		recipeContainer.className += " modalized";

		// Prevent it from opening more modals on top
		// Also prevent bg click event propagation
		recipeContainer.onclick = (e) => e.stopPropagation();

		showCloseBtn(recipeContainer, recipeContainerClassName, modalBg);

		modalBg.appendChild(recipeContainer);
		document.body.appendChild(modalBg);
	}
}