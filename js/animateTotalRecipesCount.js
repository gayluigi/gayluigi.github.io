function animateTotalRecipesCount() {
	var totalRecipesCountContainer = document.getElementById("totalRecipesCount");
	recipes.forEach((r, idx) =>
		setTimeout(() => {
			totalRecipesCountContainer.innerHTML = idx + 1;
		}, idx * 5)
	);
}