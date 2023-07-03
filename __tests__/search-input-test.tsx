/** @format */

import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { useDispatch } from 'react-redux';
import SearchTextInput from '../src/components/search-input';
import { getSearchArticleAction } from '../src/state/actions';
import { navigationMock } from '../__mocks__/configs';

const dispatch = useDispatch as any;
const renderComponent = () =>
	render(<SearchTextInput navigation={navigationMock} />);
describe('SearchTextInput', () => {
	test('dispatches search action when search button is pressed', async () => {
		const dispatchMock = jest.fn();
		dispatch.mockReturnValue(dispatchMock);

		const { getByTestId } = await renderComponent();

		const searchInput = getByTestId('textInput');

		fireEvent.changeText(searchInput, 'election');
		const searchButton = getByTestId('searchButton');
		fireEvent.press(searchButton);

		expect(dispatchMock).toHaveBeenCalledWith(
			getSearchArticleAction('election', navigationMock)
		);
		expect(searchInput.props.value).toBe('');
	});

	test('Render Elements in Search Component', async () => {
		const dispatchMock = jest.fn();
		dispatch.mockReturnValue(dispatchMock);

		const { getByTestId } = await renderComponent();

		const searchInput = getByTestId('textInput');
		const parentContainer = getByTestId('parent-container');

		expect(searchInput).toBeDefined();
		expect(parentContainer).toBeDefined();

		// If user enter any word  which has length >=3 so that search button will appear and user can click and get the results
		fireEvent.changeText(searchInput, 'searchhhh');
		const searchButton = getByTestId('searchButton');

		expect(searchButton).toBeDefined();
	});
});
