import {
	GET_SCIENCE_NEWS_ATTEMP,
	GET_SCIENCE_NEWS_FAILURE,
	GET_SCIENCE_NEWS_SUCCESS,
	GET_WORLD_NEWS_ATTEMP,
	GET_WORLD_NEWS_FAILURE,
	GET_WORLD_NEWS_SUCCESS,
} from '../../action-types/category';

const INITIAL_STATE = {
	topNews: {
		news: [],
	},
	loader: false,
};

const categoryEntityReducer = (
	state = INITIAL_STATE,
	action: IAction
): allAnyTypes => {
	switch (action.type) {
		case GET_WORLD_NEWS_ATTEMP: {
			return { ...INITIAL_STATE, loader: true };
		}
		case GET_WORLD_NEWS_SUCCESS: {
			return {
				...INITIAL_STATE,
				topNews: { ...state.topNews, news: action.payload },
				loader: false,
			};
		}

		case GET_WORLD_NEWS_FAILURE: {
			return { ...INITIAL_STATE, loader: false };
		}

		case GET_SCIENCE_NEWS_ATTEMP: {
			return { ...INITIAL_STATE, loader: true };
		}
		case GET_SCIENCE_NEWS_SUCCESS: {
			return {
				...INITIAL_STATE,
				topNews: { ...state.topNews, news: action.payload },
				loader: false,
			};
		}

		case GET_SCIENCE_NEWS_FAILURE: {
			return { ...INITIAL_STATE, loader: false };
		}

		default:
			return state;
	}
};

export {categoryEntityReducer};
