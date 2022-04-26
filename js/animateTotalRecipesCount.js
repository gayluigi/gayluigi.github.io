function exponentialEaseInOut(
	t,
	b = 0,
	c = 35,
	d = 210
) {
	return c * Math.pow(2, 10 * (t/d - 1)) + b;
};

function animateTotalRecipesCount() {
	var totalRecipesCountContainer = document.getElementById("totalRecipesCount");
	recipes.forEach((r, idx) =>
		setTimeout(() =>
			totalRecipesCountContainer.innerHTML = idx + 1,
			exponentialEaseInOut(idx)
		)
	);

	var lastFrameTimeout = exponentialEaseInOut(recipes.length);
	setTimeout(() => {
		totalRecipesCountContainer.classList.add("flash");
	}, lastFrameTimeout);
	setTimeout(() => {
		totalRecipesCountContainer.classList.remove("flash");
	}, lastFrameTimeout + 200);
}