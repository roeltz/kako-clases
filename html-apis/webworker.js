let i = 0;

setInterval(() => {
	postMessage(i++);
}, 5000);