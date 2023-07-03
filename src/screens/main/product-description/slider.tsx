/** @format */

import React, { useRef, useState } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import styles from './styled';
const SliderComponent: React.FC<IPropSlider> = ({ data }) => {
	const carouselRef = useRef(null);
	const getScreenwidth = Dimensions.get('window').width;
	const [index, setIndex] = useState(0);

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

	const renderSlider = () => {
		return (
			<View style={styles.sliderContainer}>
				{/* <Carousel
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
				/> */}
			</View>
		);
	};

	return renderSlider();
};

export default React.memo(SliderComponent);
