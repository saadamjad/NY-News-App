/** @format */

import React, { useCallback } from 'react';

import styles from './styled';
import { FlatList, Image, View, Text, TouchableOpacity } from 'react-native';
import { AppLoader, SearchTextInput } from '../../../components';
import { useDispatch, useSelector } from 'react-redux';
import {
	getRecentSearches,
	isLoading,
} from '../../../state/selectors/features/search';
import {
	getSearchArticleAction,
	updateRecentSearchArticleAction,
} from '../../../state/actions';
import { Images } from '../../../utils/theme';
import Header from '../../../components/header';
import { staticText } from '../../../utils/staticTexts';

const renderSeperator = () => {
	return <View style={styles.itemSeperator} />;
};

const SearchScreen = ({ navigation }: INavigationProps) => {
	const isLoader = useSelector(isLoading);
	const dispatch: allAnyTypes = useDispatch();
	const recentSearches = useSelector(getRecentSearches);

	const updateRecentSearch = (deletedItem: string) => {
		const filteredData = recentSearches?.filter(
			(item: string) => item != deletedItem
		);
		dispatch(updateRecentSearchArticleAction(filteredData));
	};

	const renderItem = ({ item, index }: FlatListIProps) => {
		return (
			<TouchableOpacity
				key={index}
				style={styles.renderView}
				onPress={() => {
					searchCall(item);
				}}>
				<View style={{ flexDirection: 'row', paddingVertical: 13 }}>
					<Text style={styles.titleStyle}>{item}</Text>
				</View>

				<TouchableOpacity onPress={() => updateRecentSearch(item)}>
					<Image
						source={Images.images.cross}
						style={styles.cancelStyle}
					/>
				</TouchableOpacity>
			</TouchableOpacity>
		);
	};

	const searchCall = (search: string) => {
		dispatch(getSearchArticleAction(search, navigation));
	};

	const renderLoader = () => {
		return <AppLoader isActive={isLoader} />;
	};

	const SearchComponent = useCallback(() => {
		return (
			<>
				<SearchTextInput navigation={navigation} />
				<View style={styles.flatListView}>
					{isLoader && renderLoader()}

					<FlatList
						data={
							recentSearches?.length >= 5
								? recentSearches?.slice(0, 5)
								: recentSearches
						}
						renderItem={renderItem}
						showsVerticalScrollIndicator={false}
						ListHeaderComponent={
							recentSearches?.length > 0 ? (
								<View style={styles.headerStyle}>
									<Text style={styles.recentText}>
										{' '}
										{staticText.RECENT_SEARCHES}{' '}
									</Text>
								</View>
							) : null
						}
						ItemSeparatorComponent={renderSeperator}
					/>

					<View style={styles.emptyView}>
						{recentSearches.length === 0 && (
							<Text style={styles.recentText}>
								{' '}
								{staticText.NO_RESENT_SEARCHES}{' '}
							</Text>
						)}
					</View>
				</View>
			</>
		);
	}, [recentSearches, isLoader]);

	const renderHeader = () => {
		return (
			<Header
				testID='headerComponent'
				navigation={navigation}
				goBack
				headerText={''}
			/>
		);
	};
	return (
		<View style={styles.container}>
			{renderHeader()}
			<SearchComponent />
		</View>
	);
};

export default React.memo(SearchScreen);
