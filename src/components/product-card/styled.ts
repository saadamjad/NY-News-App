/** @format */

import { StyleSheet } from 'react-native';
import { Colors } from '../../utils/theme';

const styles: IPropsStyleSheet = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-around',
		flexDirection: 'row',
		flexWrap: 'wrap',
		paddingHorizontal: 10,
	},
	productImage: {
		width: '100%',
		flex: 0.5,
	},
	section: {
		height: 20,

		overflow: 'hidden',
		textAlign: 'center',
		color: Colors.background,
		fontWeight: 'bold',
		backgroundColor: Colors.primary,
	},

	productTitle: {
		flex: 0.5,
		justifyContent: 'flex-end',
		width: '100%',
	},
	parent: {
		width: '100%',
		overflow: 'hidden',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 0,
		},
		shadowOpacity: 0.27,
		shadowRadius: 1.65,
		elevation: 1,
		backgroundColor: 'white',
		marginBottom: 20,
	},

	backgroundImage: {
		width: '100%',
		height: 250,
		borderRadius: 25,
		overflow: 'hidden',
	},

	nameContainer: {
		backgroundColor: Colors.primary,
		borderTopRightRadius: 50,
		borderBottomRightRadius: 50,
		paddingVertical: 8,
	},

	name: {
		color: '#FFFFFF',
		fontSize: 17,
		marginLeft: 10,
	},
	subSectionContainer: {
		color: '#FFFFFF',
		marginLeft: 10,
		marginTop: 15,
	},
	subSection: {
		color: Colors.secondary,
	},
	description: {
		marginTop: 2,

		color: Colors.primary,
	},
});
export default styles;
