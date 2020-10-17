define(() => {
	
	function loader(directory) {
		return (name) => {
			return () => {
				return {
					component: new Promise((resolve, reject) => {
						require([`${directory}/${name}`], def => resolve(def), err => reject(err));
					})
				};
			};
		};
	}

	return loader;
});