/** @format */

import React, { useCallback, useRef, useState } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import styles from './styled';
const SliderComponent: React.FC<IPropSlider> = ({ data }) => {
	const carouselRef: allAnyTypes = useRef(null);
	const getScreenwidth: number = Dimensions.get('window').width;
	const [index, setIndex] = useState<number>(0);

	const _renderCarouselItems = ({ index, item }: FlatListIProps) => {
		return (
			<View
				key={index}
				style={styles.carouselItem}>
				<Text style={styles.carouselCaption}>{item?.caption}</Text>
				<Image
					source={{ uri: item?.url }}
					resizeMode='cover'
					style={styles.carouselImage}
				/>
			</View>
		);
	};

	const renderSlider = useCallback(() => {
		return (
			<View style={styles.sliderContainer}>
				<Carousel
					layout='default'
					sliderWidth={getScreenwidth}
					itemWidth={getScreenwidth}
					renderItem={_renderCarouselItems}
					autoplay={true}
					data={data}
					loop={true}
					useScrollView={true}
					autoplayDelay={500}
					onSnapToItem={(index: number) => setIndex(index)}
					ref={carouselRef}
				/>
				<Pagination
					dotsLength={data?.length}
					activeDotIndex={index}
					inactiveDotOpacity={0.4}
					inactiveDotScale={0.6}
					carouselRef={carouselRef}
					dotContainerStyle={styles.dotContainer}
					containerStyle={styles.paginationContainer}
				/>
			</View>
		);
	}, [data]);

	return renderSlider();
};

export default React.memo(SliderComponent);
