function isScreenLockSupported() {
	return ('wakeLock' in navigator);
}

async function getScreenWakeLock() {
	if (isScreenLockSupported()){
		try {
			let screenLock = await navigator.wakeLock.request('screen');
			return screenLock;
		} catch(e) {
			console.log(e);
		}
		return null;
	}
}

function releaseScreenWakeLock(screenLock) { 
	if (screenLock) {
		screenLock.release();
	}
}