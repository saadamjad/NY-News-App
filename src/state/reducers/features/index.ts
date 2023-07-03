import {combineReducers} from 'redux';
import { categoryEntityReducer } from './category';
import { attemptLoginReducer } from './auth';
import { searchEntityReducer } from './search';

const featuresReducer = combineReducers({
	category: categoryEntityReducer,
	user: attemptLoginReducer,
	search: searchEntityReducer,
});

export {featuresReducer};
