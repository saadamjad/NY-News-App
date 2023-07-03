/**
 * eslint-disable max-len
 *
 * @format
 */

import { ROUTES } from '../../../constants/navigation-routes';
import { AuthService } from '../../../services';
import { LocalStorageService } from '../../../services/local-storage';

import {
	ATTEMPT_LOGIN,
	ATTEMPT_LOGIN_FAILURE,
	ATTEMPT_LOGIN_SUCCESS,
	ATTEMPT_SIGN_UP,
	ATTEMPT_SIGN_UP_FAILURE,
	ATTEMPT_SIGN_UP_SUCCESS,
} from '../../action-types/auth';

const authService = new AuthService();
const localStorageService = new LocalStorageService();

export const attemptLogin =
	(data: isTypeObject) =>
	async (dispatch: allAnyTypes): Promise<allAnyTypes> => {
		dispatch({ type: ATTEMPT_LOGIN });

		try {
			const response = await authService.loginApiCall(data);
			const { access_token } = response?.data;

			dispatch({
				type: ATTEMPT_LOGIN_SUCCESS,
				payload: access_token,
			});
			await localStorageService?.persist('authToken', access_token);
		} catch (error: allAnyTypes) {
			dispatch({ type: ATTEMPT_LOGIN_FAILURE });
			console.log(error);
		}
	};

export const attemptSignup =
	(data: isTypeObject, navigation: allAnyTypes) =>
	async (dispatch: allAnyTypes): Promise<allAnyTypes> => {
		dispatch({ type: ATTEMPT_SIGN_UP });

		try {
			const response = await authService.signupApiCall(data);
			const { access_token } = response?.data;

			dispatch({
				type: ATTEMPT_SIGN_UP_SUCCESS,
				payload: access_token,
			});
			await localStorageService?.persist('authToken', access_token);
			navigation && navigation?.navigate(ROUTES.LOGIN);
		} catch (error: allAnyTypes) {
			dispatch({ type: ATTEMPT_SIGN_UP_FAILURE });
			console.log(error);
		}
	};
