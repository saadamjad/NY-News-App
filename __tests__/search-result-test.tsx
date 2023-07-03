/** @format */

import React from 'react';
import { render } from '@testing-library/react-native';
import { useDispatch, useSelector } from 'react-redux';
import { navigationMock } from '../__mocks__/configs';
import { SearchResult } from '../src/screens';
import { mockSearchData } from '../__mocks__/mockdata';

const dispatch = useDispatch as any;
const selector = useSelector as any;
const renderComponent = () =>
	render(<SearchResult navigation={navigationMock} />);

describe('SearchResultScreen', () => {
	test('renders search results correctly', () => {
		dispatch?.mockReturnValueOnce(mockSearchData);

		const { getByTestId, queryByText } = render(
			<SearchResult navigation={navigationMock} />
		);

		const headerComponent = getByTestId('headerComponent');
		const noResultText = queryByText('No Result Found!');

		expect(headerComponent).toBeTruthy();
		expect(noResultText).toBeNull();
	});

	test('renders "No Result Found!" when search data is empty', async () => {
		selector.mockReturnValueOnce([]);
		const { getByTestId, queryAllByTestId, getByText } =
			await renderComponent();

		const headerComponent = getByTestId('headerComponent');
		const productCards = queryAllByTestId('productCard');
		const noResultText = getByText('No Result Found!');

		expect(headerComponent).toBeTruthy();
		expect(productCards.length).toBe(0);
		expect(noResultText).toBeTruthy();
	});
	test('renders  All component', async () => {
		const { getByTestId } = await renderComponent();

		const headerComponent = getByTestId('headerComponent');
		const flatlist = getByTestId('search-data');

		expect(headerComponent).toBeDefined();
		expect(flatlist).toBeDefined();
	});
});
