define([
	"dayjs"
], (dayjs) => {
	
	function standardFormat(date) {
		return dayjs(date).format("YYYY/MM/DD HH:mm:ss");
	}

	return {
		standardFormat
	};
});