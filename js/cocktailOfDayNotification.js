function getNotificationPermAndShow(notification) {
	if (!("Notification" in window)) {
		console.log("This browser does not support desktop notification");
	} else if (Notification.permission === "granted") {
		self.registration.showNotification(notification);
	} else if (Notification.permission !== "denied") {
		Notification.requestPermission().then((permission) => {
			if (permission === "granted") {
				self.registration.showNotification(notification);
			}
		});
	}
}

// const HOURLY_INTERVAL_MS = 60 * 60 * 1000;
// const SIX_PM_24_HR = 18;
const OPEN_LINK_ACTION = "openLink";
// setInterval(() => {
//	const now = new Date();
//	if (now.getHours() === SIX_PM_24_HR) {
//		getNotificationPermAndShow(
//			() => new Notification(`Cocktail of the day: ${COCKTAIL_OF_DAY.name}`)
//		);
//	}
// }, HOURLY_INTERVAL_MS);


const notification = new Notification(`Cocktail of the day: ${COCKTAIL_OF_DAY.name}`, {
	icon: `${window.location.host}/img/appIcon.png`,
	data: `${window.location.host}?cocktail=${encodeURIComponent(COCKTAIL_OF_DAY.name)}`,
	actions: [{ action: OPEN_LINK_ACTION, title: 'See recipe' }],
});
getNotificationPermAndShow(notification);

self.addEventListener('notificationclick', (event) => {
	event.notification.close();
	if (event.action === OPEN_LINK_ACTION) {
		window.location.href = event.data;
	}
}, false);