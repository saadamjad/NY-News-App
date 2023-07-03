/** @format */

import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import ProductList from '../src/screens/main/category';
import { useDispatch, useSelector } from 'react-redux';

const dispatch = useDispatch as any;

describe('ProductList', () => {
	const navigationMock: allAnyTypes = {
		navigate: jest.fn(),
	};

	test('renders the news component correctly', () => {
		const dispatchMock = jest.fn();
		dispatch.mockReturnValue(dispatchMock);

		const { getByTestId, queryAllByTestId } = render(
			<ProductList navigation={navigationMock} />
		);

		const headerComponent = getByTestId('headerComponent');
		const textInput = getByTestId('textInput');
		const parentContainerFilter = getByTestId('parentContainerFilter');
		const flatListComponent = getByTestId('flatListComponent');
		const appLoaderComponent = queryAllByTestId('appLoaderComponent');

		expect(headerComponent).toBeTruthy();
		expect(textInput).toBeTruthy();
		expect(parentContainerFilter).toBeTruthy();
		expect(flatListComponent).toBeTruthy();
		expect(appLoaderComponent.length).toBe(0);
	});
	test('Check selector data properly render', () => {
		expect(useSelector).toHaveBeenCalledTimes(2);
		expect(useSelector).toHaveBeenNthCalledWith(1, expect.any(Function));
		expect(useSelector).toHaveBeenNthCalledWith(2, expect.any(Function));
	});

	test('navigates to the product details screen when a product card is pressed', () => {
		const dispatchMock = jest.fn();

		dispatch.mockReturnValue(dispatchMock);
		const { getByTestId } = render(
			<ProductList
				testID='productCard'
				navigation={navigationMock}
			/>
		);

		const productCard = getByTestId('flatListComponent');

		fireEvent.press(productCard);
	});
});
