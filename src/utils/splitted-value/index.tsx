/** @format */

const getSliptedValue = (value: allAnyTypes) => {
	if (value) return value?.split(' ');
	return '';
};

export { getSliptedValue };