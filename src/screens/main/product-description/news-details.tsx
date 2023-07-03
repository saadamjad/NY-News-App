/** @format */

import React, { useCallback } from 'react';
import { View, Text, ScrollView, Linking } from 'react-native';
import styles from './styled';
import { Header } from '../../../components';
import { getDateMonthYear } from '../../../utils/date-formats';
import Slider from './slider';

const NewsDetails = ({ route, navigation }: NewsDetailsProps) => {
	const {
		title,
		abstract,
		multimedia,
		short_url,
		updated_date,
		subsection,
		section,
	} = route?.params?.data;

	const _renderHeader = useCallback(() => {
		return (
			<Header
				testID='headerComponent'
				navigation={navigation}
				goBack
				headerText={section}
			/>
		);
	}, [section]);

	const renderSlider = useCallback(() => {
		return <Slider data={multimedia} />;
	}, [multimedia]);

	const openUrl = () => {
		Linking.openURL(short_url);
	};
	const _renderMainComponent = () => {
		return (
			<View style={{ flex: 1 }}>
				{_renderHeader()}
				<View style={styles.backgroundImage}>{renderSlider()}</View>

				<ScrollView showsVerticalScrollIndicator={false}>
					<View style={styles.discriptionContainer}>
						<View
							testID='priceQauntityContainer'
							style={styles.priceSection}>
							<View style={styles.priceContainer}>
								<Text style={styles.price}>{title}</Text>
							</View>
						</View>

						<View style={styles.descriptionTextParent}>
							<Text style={styles.descriptionText}>{abstract}</Text>
							{short_url && (
								<Text
									onPress={openUrl}
									style={styles.readMore}>
									Read More: {short_url}
								</Text>
							)}
							{subsection && (
								<View style={styles.dateContainer}>
									<Text style={styles.date}>
										{' '}
										Updated: {getDateMonthYear(updated_date)}
									</Text>
									<Text style={styles.section}>
										{subsection?.toUpperCase()}
									</Text>
								</View>
							)}
						</View>
					</View>
				</ScrollView>
			</View>
		);
	};

	return (
		<View
			testID='productDescriptionParent'
			style={styles.container}>
			{_renderMainComponent()}
		</View>
	);
};

export default React.memo(NewsDetails);
