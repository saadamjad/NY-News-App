/** @format */

import { HttpService } from '../https';
import { prepareErrorResponse, prepareResponseObject } from '../../utils/api';
import { RESPONSE_TYPES } from '../../constants/response-types';
import { API_END_POINT, API_KEY, NEWS_BASE_URL } from '../../constants/server';

export class SearchArticleService extends HttpService {
	getSearchArticleApiCall = async (search: string): Promise<any> => {
		try {
			const url: isTypeString = `${NEWS_BASE_URL}${API_END_POINT.SEARCH_ARTICLES}?q=${search}&api-key=${API_KEY}`;
			const apiResponse = await this.get(url);

			return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
		} catch (error) {
			throw prepareErrorResponse(error);
		}
	};
}
