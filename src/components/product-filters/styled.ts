/** @format */

import { StyleSheet } from 'react-native';
import { Colors } from '../../utils/theme';

const styles: IPropsStyleSheet = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		height: 30,
		width: '90%',
		alignSelf: 'center',
	},
	itemContainer: {
		flexDirection: 'row',
		borderRadius: 15,
		paddingVertical: 6,
		alignItems: 'center',
		justifyContent: 'center',

		width: '47%',
	},

	itemText: {
		color: Colors.background,
		fontSize: 10,
	},
});

export default styles;
