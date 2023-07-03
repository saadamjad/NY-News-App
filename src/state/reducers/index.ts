import {combineReducers} from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import { featuresReducer } from './features';

const featurePersistConfig = {
	key: 'features',
	storage: AsyncStorage,
	whitelist: ['user', 'search'],
};

const rootReducer = combineReducers({
	features: persistReducer(featurePersistConfig, featuresReducer),
});

export default rootReducer;
