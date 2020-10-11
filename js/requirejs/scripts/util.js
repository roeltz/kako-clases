define([
	
], () => {
	
	function alertFancy(msg) {
		alert(`«${msg}»`);
	}

	function alertFancyPlus(msg) {
		alert(`PLUS: «${msg}»`);
	}

	return {alertFancy, alertFancyPlus};
});