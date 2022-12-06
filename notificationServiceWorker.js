self.addEventListener('install', function(event) {
	event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', function(event) {
	event.waitUntil(self.skipWaiting());
});

self.addEventListener('notificationclick', (e) => {
	e.preventDefault();
	e.notification.close();
	e.waitUntil(
		clients.openWindow(e.notification.data.url)
			.then((windowClient) => windowClient ? windowClient.focus() : null)
	);
});