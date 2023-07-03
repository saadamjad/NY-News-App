/**
 * eslint-disable max-len
 *
 * @format
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
import { ROUTES } from '../../../constants/navigation-routes';
import { SearchArticleService } from '../../../services';
import {
	GET_SEARCH_ARTICLE_ATTEMP,
	GET_SEARCH_ARTICLE_FAILURE,
	GET_SEARCH_ARTICLE_SUCCESS,
	UPDATE_RECENT_SEARCH_ARTICLE_SUCCESS,
} from '../../action-types/search';

const searchArticleService = new SearchArticleService();

export const getSearchArticleAction =
	(search: string, navigation: any) =>
	async (dispatch: allAnyTypes): Promise<allAnyTypes> => {
		dispatch({ type: GET_SEARCH_ARTICLE_ATTEMP });

		try {
			const response = await searchArticleService.getSearchArticleApiCall(
				search
			);
			const { docs } = response?.data?.response;

			dispatch({
				type: GET_SEARCH_ARTICLE_SUCCESS,
				payload: docs,
				searches: search,
			});
			navigation?.navigate(ROUTES.SEARCH_RESULT);
		} catch (error: allAnyTypes) {
			dispatch({ type: GET_SEARCH_ARTICLE_FAILURE });

			console.log(error);
		}
	};

export const updateRecentSearchArticleAction =
	(data: string) =>
	async (dispatch: allAnyTypes): Promise<allAnyTypes> => {
		try {
			dispatch({
				type: UPDATE_RECENT_SEARCH_ARTICLE_SUCCESS,
				payload: data,
			});
		} catch (error: allAnyTypes) {
			console.log(error);
		}
	};
