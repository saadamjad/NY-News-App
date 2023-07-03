/** @format */

import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Login } from '../src/screens/auth';
import { navigationMock } from '../__mocks__/configs';
import { useDispatch } from 'react-redux';
import { attemptLogin } from '../src/state/actions';
import { useNavigateRoute } from '../src/utils/hooks';
import { Alert } from 'react-native';

const navigateToSignUp = jest.fn();
const dispatchMock: allAnyTypes = jest.fn();
const useNavigationRoute = useNavigateRoute as any;
const dispatch = useDispatch as any;
const renderComponent = () => render(<Login navigation={navigationMock} />);

describe('Login component', () => {
	test('renders all components in login screen', async () => {
		const { getByTestId } = await renderComponent();
		const emailInput = getByTestId('Email');
		const passwordInput = getByTestId('Password');
		const loginButton = getByTestId('loginButton');
		expect(emailInput).toBeDefined();
		expect(passwordInput).toBeDefined();
		expect(loginButton).toBeDefined();
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

	test('triggers handleLogin function when Login button is pressed', async () => {
		dispatch?.mockReturnValue(dispatchMock);
		const { getByTestId } = await renderComponent();
		const loginButton = getByTestId('loginButton');

		fireEvent.press(loginButton);

		expect(dispatchMock).toHaveBeenCalledWith(attemptLogin(expect.any(Object)));
	});
	test('displays an alert when email or password is missing', async () => {
		dispatch.mockReturnValue(dispatchMock);
		const { getByTestId } = await renderComponent();

		const loginButton = getByTestId('loginButton');
		const emailInput = getByTestId('Email');
		const passwordInput = getByTestId('Password');
		fireEvent.changeText(emailInput, '');
		fireEvent.changeText(passwordInput, '');
		fireEvent.press(loginButton);
		expect(Alert.alert).toHaveBeenCalledWith(
			'Error',
			'Please fill in all fields.'
		);
	});
	test('navigates to sign-up screen when "Don\'t have an account?" text is pressed', async () => {
		useNavigationRoute?.mockReturnValue({ navigateToSignUp });

		const { getByTestId } = await renderComponent();
		const signUpText = getByTestId('dont-have-account-text');
		fireEvent.press(signUpText);
		expect(navigateToSignUp).toHaveBeenCalled();
	});
});
