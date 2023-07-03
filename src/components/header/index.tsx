/** @format */

import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Colors, Images } from '../../utils/theme';
import styles from './styled';
import { useNavigateRoute } from '../../utils/hooks';

const Header: React.FC<IHeaderProps> = ({
	headerText,
	backgroundColor = 'transparent',
	navigation,
	testID = 'headerComponent',
	goBack = false,
}) => {
	const { navigateToBack }: isTypeObject = useNavigateRoute({ navigation });

	const renderLeft = () => (
		<TouchableOpacity
			activeOpacity={0.8}
			disabled={!goBack}
			style={styles.leftContainer}
			onPress={navigateToBack}>
			{goBack && (
				<Image
					source={Images.images.leftArrow}
					style={styles.leftImage}
				/>
			)}
		</TouchableOpacity>
	);
	return (
		<View
			testID={testID}
			style={[styles.header, { backgroundColor }]}>
			{renderLeft()}
			<View style={styles.titleContainer}>
				<Text style={{ color: Colors.primary }}>
					{'  '}
					{headerText}{' '}
				</Text>
			</View>
		</View>
	);
};

export default React.memo(Header);
