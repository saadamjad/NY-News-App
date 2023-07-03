import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/theme';

const styles: IPropsStyleSheet = StyleSheet.create({
	searchInput: {
		width: '90%',
		alignSelf: 'center',
		borderWidth: 1,

		borderColor: Colors.primary,
		borderRadius: 40,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
		marginBottom: 10,
		backgroundColor: Colors.background,
		height: 40,
		color: Colors.black,
		overflow: 'hidden',
		flexDirection: 'row',
	},
});
export default styles;
