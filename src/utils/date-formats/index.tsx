/** @format */

const getDateMonthYear = (givenDate: allAnyTypes) => {
	const date = new Date(givenDate);
	const day = date?.getDate();
	const month = date?.getMonth() + 1; 
	const year = date?.getFullYear();
	if (date) return day + '-' + month + '-' + year;

	return 'N/A';
};

export { getDateMonthYear };
