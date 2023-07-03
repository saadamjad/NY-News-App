/** @format */

import {
	ATTEMPT_LOGIN,
	ATTEMPT_LOGIN_FAILURE,
	ATTEMPT_LOGIN_SUCCESS,
	ATTEMPT_SIGN_UP,
	ATTEMPT_SIGN_UP_FAILURE,
	ATTEMPT_SIGN_UP_SUCCESS,
} from '../../action-types/auth';

const INITIAL_STATE = {
	access_token: '',
	loader: false,
};

const attemptLoginReducer = (
	state = INITIAL_STATE,
	action: IAction
): allAnyTypes => {
	switch (action.type) {
		case ATTEMPT_LOGIN: {
			return {
				...state,
				loader: true,
			};
		}
		case ATTEMPT_LOGIN_SUCCESS: {
			return {
				...state,
				loader: false,
				access_token: action.payload,
			};
		}
		case ATTEMPT_LOGIN_FAILURE: {
			return {
				...state,
				loader: false,
			};
		}
		case ATTEMPT_SIGN_UP: {
			return {
				...state,
				loader: false,
			};
		}
		case ATTEMPT_SIGN_UP_SUCCESS: {
			return {
				...state,
				loader: false,
			};
		}
		case ATTEMPT_SIGN_UP_FAILURE: {
			return {
				...state,
				loader: false,
			};
		}

		default:
			return state;
	}
};

export { attemptLoginReducer };
