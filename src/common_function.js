export const toTitleCase = str => {
	return str[0].toUpperCase() + str.slice(1);
};

export const makeParamsURL = filter => {
	return `/shop?categories=${filter.currentCategories}&show=${filter.productPerPage}&page=${filter.currentPage}&sort=${filter.sortBy}&fromPrice=${filter.priceRange.min}&toPrice=${filter.priceRange.max}`;
};
