/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { CategoryService } from '../../../services';

import {
	GET_SCIENCE_NEWS_ATTEMP,
	GET_SCIENCE_NEWS_FAILURE,
	GET_SCIENCE_NEWS_SUCCESS,
	GET_WORLD_NEWS_ATTEMP,
	GET_WORLD_NEWS_FAILURE,
	GET_WORLD_NEWS_SUCCESS,
} from '../../action-types/category';

const categoryService = new CategoryService();

export const getWorldNewsAction =
	() =>
	async (dispatch: allAnyTypes): Promise<allAnyTypes> => {
		dispatch({ type: GET_WORLD_NEWS_ATTEMP });

		try {
			const response = await categoryService.getWorldNewsApiCall();
			const { results } = response?.data;

			dispatch({ type: GET_WORLD_NEWS_SUCCESS, payload: results });
		} catch (error: allAnyTypes) {
			dispatch({ type: GET_WORLD_NEWS_FAILURE });

			console.log(error);
		}
	};

export const getScienceNewsAction =
	() =>
	async (dispatch: allAnyTypes): Promise<allAnyTypes> => {
		dispatch({ type: GET_SCIENCE_NEWS_ATTEMP });

		try {
			const response = await categoryService.getScienceNewsApiCall();
			const { results } = response?.data;
			dispatch({ type: GET_SCIENCE_NEWS_SUCCESS, payload: results });
		} catch (error: allAnyTypes) {
			dispatch({ type: GET_SCIENCE_NEWS_FAILURE });

			console.log(error);
		}
	};

