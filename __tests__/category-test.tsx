/** @format */

import React from 'react';
import { render } from '@testing-library/react-native';
import CategoryCard from '../src/screens/main/category';
import { Provider } from 'react-redux';
import { initialState } from '../__mocks__/mockdata';
import { navigationMock, store } from '../__mocks__/configs';

const renderComponent = () => (
	<Provider store={store(initialState)}>
		<CategoryCard navigation={navigationMock} />
	</Provider>
);

describe('ProductCard', () => {
	const { getAllByTestId } = render(renderComponent());
	const parentComponent = getAllByTestId('productParentComponent');
	const headerComponent = getAllByTestId('headerComponent');
	const loaderComponent = getAllByTestId('appLoaderComponent');
	const searchInputComponent = getAllByTestId('textInput');
	const filterComponent = getAllByTestId('parentContainerFilter');
	const flatlistComponent = getAllByTestId('flatListComponent');
	const totalChildComponents = 5;

	it('should render all child components', () => {
		expect(parentComponent.length).toBe(1);
	});
	test('Check if the parent component is render', async () => {
		expect(headerComponent.length).toBe(1);
	});

	test('Check if the appLoader component is render', async () => {
		expect(loaderComponent.length).toBe(1);
	});

	test('Check if the textInput component is render', async () => {
		expect(searchInputComponent.length).toBe(1);
	});

	test('Check if the filter component is render', async () => {
		expect(filterComponent.length).toBe(1);
	});

	test('Check if the filter component is render', async () => {
		expect(flatlistComponent.length).toBe(1);
	});

	test(`${
		totalChildComponents + ' components should be shown in home screen'
	}`, async () => {
		expect(
			headerComponent.length +
				loaderComponent.length +
				searchInputComponent.length +
				filterComponent.length +
				flatlistComponent.length
		).toBe(totalChildComponents);
	});
});
