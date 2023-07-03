/** @format */

import { StyleSheet } from 'react-native';

const styles: IPropsStyleSheet = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		paddingHorizontal: 20,
	},
	signupText: {
		marginTop: 20,
		textAlign: 'center',
		color: 'blue',
		textDecorationLine: 'underline',
	},
	input: {
		marginBottom: 10,
		paddingVertical: 8,
		paddingHorizontal: 12,
		borderWidth: 1,
		borderColor: '#ccc',
		borderRadius: 4,
	},
	loader: {
		marginTop: 10,
	},
});

export default styles;
