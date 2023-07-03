/** @format */

import { HttpService } from '../https';
import { prepareErrorResponse, prepareResponseObject } from '../../utils/api';
import { RESPONSE_TYPES } from '../../constants/response-types';
import { API_END_POINT, AUTH_BASE_URL } from '../../constants/server';

export class AuthService extends HttpService {
	loginApiCall = async (data: isTypeObject): Promise<any> => {
		try {
			const url = AUTH_BASE_URL + API_END_POINT.AUTH_APIS.LOGIN;
			const apiResponse = await this.post(url, data);
			return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
		} catch (error) {
			throw prepareErrorResponse(error);
		}
	};
	signupApiCall = async (data: isTypeObject): Promise<any> => {
		try {
			const url = AUTH_BASE_URL + API_END_POINT.AUTH_APIS.SIGN_UP;
			const apiResponse = await this.post(url, data);
			return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
		} catch (error) {
			throw prepareErrorResponse(error);
		}
	};
}
