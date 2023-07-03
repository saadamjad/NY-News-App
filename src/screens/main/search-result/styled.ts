/** @format */

import { StyleSheet } from 'react-native';
import { Colors } from '../../../utils/theme';

const styles: IPropsStyleSheet = StyleSheet.create({
	container: {
		flex: 1,
	},

	itemSeperator: {
		backgroundColor: Colors.lighGrayColor,
		height: 1,
		width: '100%',
	},
	Text: { textAlign: 'center' },
});
export default styles;
