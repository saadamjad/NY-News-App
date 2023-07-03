/** @format */

import { StyleSheet } from 'react-native';
import { Colors } from '../../../utils/theme';

const styles: IPropsStyleSheet = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
	discriptionContainer: {
		flex: 1,
		backgroundColor: 'white',
	},
	backgroundImage: {
		width: '100%',
		height: '50%',
	},

	priceSection: {
		flexDirection: 'row',
	},
	priceContainer: {
		backgroundColor: Colors.primary,
		borderTopRightRadius: 50,
		borderBottomRightRadius: 50,
		paddingVertical: 10,
		width: '100%',
	},
	price: {
		color: '#FFFFFF',
		fontWeight: 'bold',
		fontSize: 11,
		marginHorizontal: 10,
	},

	descriptionText: {
		fontWeight: 'bold',
		color: Colors.textColorPrimary,
	},
	descriptionTextParent: {
		width: '100%',
		margin: 10,
	},
	sliderContainer: {
		flex: 1,
	},
	carouselItem: {
		flex: 1,
		paddingHorizontal: 15,
		paddingVertical: 10,
	},
	carouselCaption: {
		paddingVertical: 5,
	},
	carouselImage: {
		width: '100%',
		height: '100%',
		overflow: 'hidden',
	},

	dotContainer: {
		marginHorizontal: 4,
	},
	paginationContainer: {
		paddingVertical: 10,
	},
	readMore: {
		color: Colors.secondary,
		fontWeight: 'bold',
		marginVertical: 10,
	},
	dateContainer: {
		paddingVertical: 20,
	},
	section: {
		color: Colors.lighGrayColor_1,
		fontSize: 10,
		fontWeight: 'bold',
		marginTop: 5,
	},
	date: { color: Colors.lighGrayColor_1, fontSize: 10 },
});

export default styles;
