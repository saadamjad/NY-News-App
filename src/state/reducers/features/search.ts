/** @format */

import {
	GET_SEARCH_ARTICLE_ATTEMP,
	GET_SEARCH_ARTICLE_SUCCESS,
	GET_SEARCH_ARTICLE_FAILURE,
	UPDATE_RECENT_SEARCH_ARTICLE_ATTEMP,
	UPDATE_RECENT_SEARCH_ARTICLE_SUCCESS,
	UPDATE_RECENT_SEARCH_ARTICLE_FAILURE,
} from '../../action-types/search';

const INITIAL_STATE = {
	searchData: [],
	allSearches: [],
	loader: false,
};

const searchEntityReducer = (
	state = INITIAL_STATE,
	action: IAction
): allAnyTypes => {
	switch (action.type) {
		case GET_SEARCH_ARTICLE_ATTEMP: {
			return { ...state, loader: true };
		}
		case GET_SEARCH_ARTICLE_SUCCESS: {
			return {
				...state,
				searchData: action.payload,
				allSearches: [...state.allSearches, action.searches],
				loader: false,
			};
		}

		case GET_SEARCH_ARTICLE_FAILURE: {
			return { ...INITIAL_STATE, loader: false };
		}

		case UPDATE_RECENT_SEARCH_ARTICLE_ATTEMP: {
			return { ...state, loader: true };
		}
		case UPDATE_RECENT_SEARCH_ARTICLE_SUCCESS: {
			return {
				...state,
				allSearches: action.payload,
			};
		}

		case UPDATE_RECENT_SEARCH_ARTICLE_FAILURE: {
			return { ...INITIAL_STATE, loader: false };
		}

		default:
			return state;
	}
};

export { searchEntityReducer };
