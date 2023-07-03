/** @format */

import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styled';
import { useNavigateRoute } from '../../utils/hooks';
import ProductImage from './product-image';

const ProductCard: React.FC<ProductCardProps> = ({ item, navigation }) => {
	const { navigateToDetailPage } = useNavigateRoute({
		navigation,
	});

	const { title, abstract, multimedia, subsection, section } = item;

	const navigationHanlder = () => {
		navigateToDetailPage(item);
	};

	const renderImage = () => {
		return (
			<View testID='news-image-details'>
				<ProductImage
					multimedia={multimedia}
					section={section}
					title={title}
				/>
			</View>
		);
	};
	return (
		<View
			testID='productCardRendered'
			key={title}
			style={styles.container}>
			<TouchableOpacity
				testID='productCard'
				onPress={navigationHanlder}
				activeOpacity={0.9}
				style={styles.parent}>
				{renderImage()}

				<View style={styles.subSectionContainer}>
					<Text
						testID='productprice'
						style={styles.subSection}>
						{subsection ? subsection : 'N/A'}
					</Text>
					<Text
						testID='productDescription'
						style={styles.description}>
						{abstract}
					</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
};

export default React.memo(ProductCard);
