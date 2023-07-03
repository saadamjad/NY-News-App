/** @format */

import { useCallback } from 'react';
import { ROUTES } from '../../../constants/navigation-routes';

export const useNavigateRoute = ({ navigation }: INavigationProps) => {
	const navigateToBack = useCallback(() => {
		navigation?.goBack();
	}, [navigation]);

	const navigateToSignIn = useCallback(() => {
		navigation?.navigate(ROUTES.LOGIN);
	}, [navigation]);

	const navigateToSignUp = useCallback(() => {
		navigation?.navigate(ROUTES.SIGN_UP);
	}, [navigation]);


	const navigateToHome = useCallback(() => {
		navigation?.navigate(ROUTES.HOME);
	}, [navigation]);

	const navigateToSearch = useCallback(() => {
		navigation?.navigate(ROUTES.SEARCH);
	}, [navigation]);

	const navigateToDetailPage = useCallback(
		(data: isTypeObject) => {
			navigation?.navigate(ROUTES.PRODUCT_DESCRIPTION, {
				data,
			});
		},
		[navigation]
	);

	return {
		navigateToBack,
		navigateToDetailPage,
		navigateToSignUp,
		navigateToSignIn,
		navigateToHome,
		navigateToSearch,
	};
};
