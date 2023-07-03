import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Colors} from '../../utils/theme';

const AppLoader = ({ isActive = true }: { isActive: boolean }) => {
	if (isActive) {
		return (
			<ActivityIndicator
				testID='activityIndicator'
				size='large'
				color={Colors.secondary}
			/>
		);
	}

	return null;
};

export default AppLoader;
