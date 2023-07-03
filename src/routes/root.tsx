/** @format */

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES } from '../constants/navigation-routes';
import {
	Category,
	NewsDetails,
	Login,
	Signup,
	Search,
	SearchResult,
} from '../screens';
const { Screen, Navigator } = createStackNavigator();

export const RootNavigation = ({
	isAuthenticated,
}: {
	isAuthenticated: string;
}) => {
	return (
		<Navigator>
			{!isAuthenticated && (
				<>
					<Screen
						name={ROUTES.LOGIN}
						component={Login}
						options={{
							headerShown: false,
						}}
					/>
					<Screen
						name={ROUTES.SIGN_UP}
						component={Signup}
						options={{
							headerShown: false,
						}}
					/>
				</>
			)}
			<Screen
				name={ROUTES.HOME}
				component={Category}
				options={{
					headerShown: false,
				}}
			/>
			<Screen
				name={ROUTES.PRODUCT_DESCRIPTION}
				component={NewsDetails}
				options={{
					headerShown: false,
				}}
			/>

			<Screen
				name={ROUTES.SEARCH}
				component={Search}
				options={{
					headerShown: false,
				}}
			/>
			<Screen
				name={ROUTES.SEARCH_RESULT}
				component={SearchResult}
				options={{
					headerShown: false,
				}}
			/>
		</Navigator>
	);
};
