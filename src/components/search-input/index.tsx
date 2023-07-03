/** @format */

import React, { useCallback, useState } from 'react';
import { TextInput, View, TouchableOpacity, Text } from 'react-native';
import styles from './styled';
import { useDispatch } from 'react-redux';
import { useNavigateRoute } from '../../utils/hooks';
import { Colors } from '../../utils/theme';
import { getSearchArticleAction } from '../../state/actions';

const SearchTextInput = ({
	testID = 'textInput',
	navigation,
}: ISearchTextInputProps) => {
	const dispatch: allAnyTypes = useDispatch();
	const [search, setSearch] = useState('');
	const { navigateToSearch } = useNavigateRoute({
		navigation,
	});

	const handleSearch = useCallback(
		(query: string) => {
			setSearch(query);
		},
		[search]
	);

	const searchCall = useCallback(() => {
		if (search) {
			dispatch(getSearchArticleAction(search, navigation));
			setSearch('');
		}
	}, [search]);

	return (
		<View
			testID='parent-container'
			style={styles.searchInput}>
			<TextInput
				onPressIn={navigateToSearch}
				testID={testID}
				placeholder='Search by title'
				style={{ width: '80%' }}
				value={search}
				onChangeText={handleSearch}
			/>
			{search && search?.length >= 3 && (
				<TouchableOpacity
					testID='searchButton'
					style={{
						height: 50,
						width: '20%',
						justifyContent: 'center',
						alignItems: 'center',
					}}
					onPress={searchCall}>
					<Text style={{ color: Colors.secondary }}>Search</Text>
				</TouchableOpacity>
			)}
		</View>
	);
};

export default React.memo(SearchTextInput);
