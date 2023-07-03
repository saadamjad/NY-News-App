/** @format */

import { StyleSheet } from 'react-native';
import { Colors } from '../../../utils/theme';

const styles: IPropsStyleSheet = StyleSheet.create({
	container: {
		flex: 1,
	},

	headerStyle: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},

	renderView: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},

	cancelStyle: {
		tintColor: Colors.primary,
		height: 30,
		width: 30,
	},

	emptyView: {
		alignItems: 'center',
		justifyContent: 'center',
		flexGrow: 1,
	},
	flatListView: {
		paddingHorizontal: 16,
		paddingBottom: 5,
		flexGrow: 1,
	},

	itemSeperator: {
		backgroundColor: Colors.lighGrayColor,
		height: 1,
		width: '100%',
	},
});
export default styles;
