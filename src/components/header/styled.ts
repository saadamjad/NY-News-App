/** @format */

import { StyleSheet } from 'react-native';

const styles: IPropsStyleSheet = StyleSheet.create({
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: 70,
		width: '90%',
		alignSelf: 'center',
		overflow: 'hidden',
	},
	headerText: {
		fontSize: 16,
	},
	leftContainer: {
		width: '33.33%',
		height: '100%',
		alignItems: 'flex-start',
		paddingRight: 70,
	},
	leftImage: { height: '100%', width: '100%' },

	titleContainer: {
		height: '100%',
		justifyContent: 'center',
		flex: 1,
		alignItems: 'flex-start',
	},
});
export default styles;
