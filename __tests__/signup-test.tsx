/** @format */

import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Signup } from '../src/screens/auth';
import { navigationMock } from '../__mocks__/configs';
import { useDispatch } from 'react-redux';
import { useNavigateRoute } from '../src/utils/hooks';
import { Alert } from 'react-native';

const navigateToSignIn = jest.fn();
const useNavigationRoute = useNavigateRoute as any;
const dispatch = useDispatch as any;

const renderComponent = () => render(<Signup navigation={navigationMock} />);

describe('Signup component', () => {
	test('renders all components in signup screen', async () => {
		const { getByTestId } = await renderComponent();
		const emailInput = getByTestId('Email');
		const passwordInput = getByTestId('Password');
		const signupButton = getByTestId('signupButton');
		expect(emailInput).toBeDefined();
		expect(passwordInput).toBeDefined();
		expect(signupButton).toBeDefined();
	});

	test('Enter email and password inputs', async () => {
		const { getByTestId } = await renderComponent();
		const emailInput = getByTestId('Email');
		const passwordInput = getByTestId('Password');
		fireEvent.changeText(emailInput, 'test@example.com');
		fireEvent.changeText(passwordInput, 'password123');

		expect(emailInput.props.value).toBe('test@example.com');
		expect(passwordInput.props.value).toBe('password123');
	});

	test('displays an alert when email or password is missing', async () => {
		const dispatchMock = jest.fn();

		dispatch.mockReturnValue(dispatchMock);
		const { getByTestId } = await renderComponent();

		const signupButton = getByTestId('signupButton');
		const emailInput = getByTestId('Email');
		const passwordInput = getByTestId('Password');
		fireEvent.changeText(emailInput, '');
		fireEvent.changeText(passwordInput, '');

		fireEvent.press(signupButton);
		expect(Alert.alert).toHaveBeenCalledWith(
			'Error',
			'Please fill in all fields.'
		);
	});
	test('triggers handleSignup function when Register button is pressed', async () => {
		const dispatchMock = jest.fn();

		dispatch.mockReturnValue(dispatchMock);

		const { getByTestId } = await renderComponent();
		const signupButton = getByTestId('signupButton');

		fireEvent.press(signupButton);

		expect(dispatchMock).toHaveBeenCalledTimes(1);
	});

	test('navigates to sign-in screen when "Already have an account?" text is pressed', async () => {
		useNavigationRoute?.mockReturnValue({ navigateToSignIn });

		const { getByTestId } = await renderComponent();

		const signUpText = getByTestId('already-have-account-text');
		fireEvent.press(signUpText);
		expect(navigateToSignIn).toHaveBeenCalled();
	});
});
