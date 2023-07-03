/** @format */

import React from 'react';
import { View, Text } from 'react-native';
import styles from './styled';
import { Images } from '../../utils/theme';
import { ImageView } from '../../components';
import ProductDescription from './product-description';

const ImageComponent = ({ multimedia, section, title }: ProductImageProps) => {
	const newImage: allAnyTypes = multimedia
		? { uri: multimedia[0]?.url && multimedia[0]?.url }
		: Images.images.cross;
	return (
		<ImageView
			source={newImage}
			style={styles.backgroundImage}
			placeholderStyle={styles.backgroundImage}
			resizeMode='cover'>
			<View style={styles.productImage}>
				<Text style={styles.section}>{section ? section : 'N/A'}</Text>
			</View>

			<View style={styles.productTitle}>
				<View style={styles.nameContainer}>
					<Text
						testID='productTitle'
						style={styles.name}>
						{<ProductDescription title={title} />}
					</Text>
				</View>
			</View>
		</ImageView>
	);
};

export default React.memo(ImageComponent);
