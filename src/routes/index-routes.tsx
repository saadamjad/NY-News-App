import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {RootNavigation} from './root';
import { getAccessToken } from '../state/selectors/features/auth';
import { useSelector } from 'react-redux';

const App = ({ isAuthenticated }: allAnyTypes) => (
	<RootNavigation isAuthenticated={isAuthenticated} />
);

export const Routes: React.FC = React.memo(() => {
	const isLoggedIn: string = useSelector(getAccessToken);

	return (
		<NavigationContainer>
			<App isAuthenticated={isLoggedIn} />
		</NavigationContainer>
	);
});
