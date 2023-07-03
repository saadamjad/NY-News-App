/** @format */

import React from 'react';
import styles from './styled';
import { FlatList, View, Text } from 'react-native';
import { ProductCard } from '../../../components';
import { useSelector } from 'react-redux';
import {
	getSearchData,
	isLoading,
} from '../../../state/selectors/features/search';
import Header from '../../../components/header';
import { staticText } from '../../../utils/staticTexts';
const SearchResultScreen = ({ navigation }: any) => {
	const searchData = useSelector(getSearchData);
	const loader = useSelector(isLoading);

	const renderItem = ({ item }: { item: Product }) => {
		return (
			<View testID='product-card'>
				<ProductCard
					item={item}
					navigation={navigation}
				/>
			</View>
		);
	};

	const renderHeader = () => {
		return (
			<Header
				testID='headerComponent'
				navigation={navigation}
				goBack
				headerText={'Result'}
			/>
		);
	};

	const renderSeperator = () => {
		return <View style={styles.itemSeperator} />;
	};

	function renderSearchInput() {
		return (
			<FlatList
				testID='search-data'
				data={searchData}
				renderItem={renderItem}
				showsVerticalScrollIndicator={false}
				ItemSeparatorComponent={renderSeperator}
			/>
		);
	}

	return (
		<View style={styles.container}>
			{renderHeader()}

			{searchData && searchData?.length === 0 && !loader ? (
				<Text
					testID='no-result-found'
					style={styles.Text}>
					{staticText.NO_RESULT_FOUND}
				</Text>
			) : (
				renderSearchInput()
			)}
		</View>
	);
};

export default SearchResultScreen;
