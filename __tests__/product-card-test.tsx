/** @format */

import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ProductCard from '../src/components/product-card';
import { Provider } from 'react-redux';
import { mockProductCardData, initialState } from '../__mocks__/mockdata';
import { store, navigationMock } from '../__mocks__/configs';
import { useNavigateRoute } from '../src/utils/hooks';

const renderComponent = () => (
	<Provider store={store(initialState)}>
		<ProductCard
			item={mockProductCardData}
			navigation={navigationMock}
		/>
	</Provider>
);
const navigateToDetailPage = jest.fn();

const useNavigationRoute = useNavigateRoute as any;

describe('ProductCard', () => {
	const { description } = mockProductCardData;
	it('Render All Components in  Product Card Screens', () => {
		const { getByTestId } = render(renderComponent());

		const productCardRendered = getByTestId('productCardRendered');
		const productCard = getByTestId('productCard');
		const productprice = getByTestId('productprice');
		const productDescription = getByTestId('productDescription');
		const news_image_details = getByTestId('news-image-details');

		expect(productCardRendered).toBeTruthy();
		expect(productCard).toBeTruthy();
		expect(productprice).toBeTruthy();
		expect(productprice).toBeTruthy();
		expect(productDescription).toBeTruthy();
		expect(news_image_details).toBeTruthy();
	});

	test('Render Product Price, Description and title ', () => {
		const { getByTestId } = render(renderComponent());

		const productPrice = getByTestId('productprice');
		const productDescription = getByTestId('productDescription');
		const productImage = getByTestId('news-image-details');

		expect(productImage).toBeTruthy();

		expect(productPrice.props.children).toBe('N/A');
		expect(productDescription.props.children || description).toBe(description);
	});

	test('check navigation and passing params', async () => {
		useNavigationRoute?.mockReturnValue({ navigateToDetailPage });

		const { getByTestId } = await render(renderComponent());

		const productCard = getByTestId('productCard');
		await fireEvent.press(productCard);

		expect(navigateToDetailPage).toHaveBeenCalled();
	});
});
