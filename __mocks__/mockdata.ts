/** @format */


const mockProductCardData: any = {
	id: 1,
	title: 'Test',
	price: '$9.99',
	description: 'This_is_description',
	productImage: { uri: 'https://example.com/image.png' },
};
const mockSearchData: any = [
	{ id: 1, name: 'Product 1' },
	{ id: 2, name: 'Product 2' },
];

const initialState = {
	features: {
		category: {},
		allProducts: [],
	},
};

const allProducts = [
	{ title: 'Product 1' },
	{ title: 'Product 2' },
	{ title: 'Product 3' },
];
export { mockProductCardData, initialState, allProducts, mockSearchData };
