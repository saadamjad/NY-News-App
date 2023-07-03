/** @format */


import 'react-native-gesture-handler/jestSetup';

// Mock dependencies

jest.mock('@react-native-async-storage/async-storage');
jest.mock('@react-native-community/async-storage');

jest.mock('react-native-screens', () => ({
	...jest.requireActual('react-native-screens'),
}));

jest.mock('react-redux', () => ({
	...jest.requireActual('react-redux'),
	useDispatch: jest.fn(),
	useSelector: jest.fn(),
}));

jest.mock('../src/state/actions/auth', () => ({
	attemptSignup: jest.fn(),
	attemptLogin: jest.fn(),
}));

jest.mock('../src/utils/hooks', () => ({
	useNavigateRoute: jest.fn().mockReturnValue({
		navigateToSignIn: jest.fn(),
		navigateToSignUp: jest.fn(),
		navigateToDetailPage: jest.fn(),
	}),
}));

jest.mock('react-native/Libraries/Alert/Alert', () => ({
	alert: jest.fn(),
}));

jest.mock('../src/state/actions', () => ({
	getSearchArticleAction: jest.fn(),
}));
