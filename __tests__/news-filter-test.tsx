/** @format */

import React from 'react';
import { render } from '@testing-library/react-native';
import { useDispatch } from 'react-redux';
import NewSelectionBar from '../src/components/product-filters';
import { Colors } from '../src/utils/theme';
import { getWorldNewsAction, getScienceNewsAction } from '../src/state/actions';

const dispatch = useDispatch as any;
const dispatchMock = jest.fn();
dispatch.mockReturnValue(dispatchMock);

describe('NewSelectionBar', () => {
	test('Verify Component render ', () => {
		const { getByTestId } = render(<NewSelectionBar />);

		const parentContainer = getByTestId('parentContainerFilter');

		expect(parentContainer).toBeTruthy();
	});
	test('Verify function should be work perfectly when clicked ', () => {
		const { getAllByTestId, getByTestId } = render(<NewSelectionBar />);

		const parentContainer = getByTestId('parentContainerFilter');
		const childButtons = getAllByTestId('child-1');

		expect(parentContainer).toBeTruthy();
		expect(childButtons?.length).toBe(1);

		childButtons?.forEach((item, i) => {
			if (item.props.children === 'World') {
				expect(dispatchMock).toHaveBeenCalledWith(expect(getWorldNewsAction));
				expect(item.props.style.backgroundColor).toBe(Colors.secondary);
			} else if (item.props.children === 'Science') {
				expect(dispatchMock).toHaveBeenCalledWith(expect(getScienceNewsAction));
				expect(item.props.style.backgroundColor).toBe(Colors.primary);
			}
		});
	});
});
