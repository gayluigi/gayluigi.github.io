const ANIMATION_DURATION_MS = 4000;

function animateTotalRecipesCount() {
	const totalRecipesCountContainer = document.getElementById("totalRecipesCount");
	recipes.forEach((r, idx) =>
		setTimeout(() =>
			totalRecipesCountContainer.innerHTML = idx + 1,
			idx * (ANIMATION_DURATION_MS / recipes.length)
		)
	);

	setTimeout(() => {
		totalRecipesCountContainer.classList.add("flash");
	}, ANIMATION_DURATION_MS);
	setTimeout(() => {
		totalRecipesCountContainer.classList.remove("flash");
	}, ANIMATION_DURATION_MS + 200);
}