function closeModal(
	recipeContainerClone,
	closeBtn,
	modalContent,
	modalBg
) {
	modalContent.removeChild(recipeContainerClone);
	modalContent.removeChild(closeBtn);

	modalBg.removeChild(modalContent);
	document.body.removeChild(modalBg);
}

function modalizeRecipe(recipeContainer) {
	return function recipeOnClick() {
		var recipeContainerClone = recipeContainer.cloneNode(true);
		recipeContainerClone.className += " modalized";
		// Prevent it from opening more modals on top
		// Also prevent bg click event propagation
		recipeContainerClone.onclick = (e) => e.stopPropagation();

		var closeBtn = document.createElement("img")
		closeBtn.className = "closeIcon modalCloseBtn";
		closeBtn.src = "./img/close-icon.svg";

		var modalContent = document.createElement("div");
		modalContent.className = "modalContent";
		modalContent.appendChild(closeBtn);
		modalContent.appendChild(recipeContainerClone);

		var modalBg = document.createElement("div");
		modalBg.className = "modalBg";
		modalBg.onclick = () => closeModal(
			recipeContainerClone,
			closeBtn,
			modalContent,
			modalBg
		);

		modalBg.appendChild(modalContent);
		document.body.appendChild(modalBg);
	}
}