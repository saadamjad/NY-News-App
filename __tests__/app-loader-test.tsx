/** @format */

import React from 'react';
import { render } from '@testing-library/react-native';
import AppLoader from '../src/components/loader';

const renderComponent = (active: boolean) => <AppLoader isActive={active} />;
describe('AppLoader', () => {
	it('should render the ActivityIndicator when isActive is true', () => {
		const { getByTestId } = render(renderComponent(true));

		const activityIndicator = getByTestId('activityIndicator');
		expect(activityIndicator).toBeTruthy();
	});

	it('should not render the ActivityIndicator when isActive is false', () => {
		const { queryByTestId } = render(renderComponent(false));

		const activityIndicator = queryByTestId('activityIndicator');
		expect(activityIndicator).toBeNull();
	});
});
