/** @format */

import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styled';
import { Colors, Images } from '../../utils/theme';
import { getScienceNewsAction, getWorldNewsAction } from '../../state/actions';
import { useDispatch } from 'react-redux';

const NewSelectionBar = ({ testID = 'parentContainerFilter' }) => {
	const dispatch: allAnyTypes = useDispatch();

	const [data, setData] = useState<OptionBarData[]>([
		{
			id: 'child-1',
			value: 'World',
			selected: true,
			callBack: () => dispatch(getWorldNewsAction()),
		},
		{
			id: 'child-2',
			value: 'Science',
			selected: false,
			callBack: () => dispatch(getScienceNewsAction()),
		},
	]);

	const handlerFilter = (index: number) => {
		const filterData = data?.map((item, i) => {
			if (index === i) {
				item?.callBack && item?.callBack();
				return { ...item, selected: true };
			}
			return { ...item, selected: false };
		});
		setData(filterData);
	};
	useEffect(() => {
		handlerFilter(0);
	}, []);

	return (
		<View
			testID={testID}
			style={styles.container}>
			{data &&
				data?.map(({ value, selected, id }, index) => {
					return (
						<TouchableOpacity
							testID={id}
							activeOpacity={0.9}
							onPress={() => handlerFilter(index)}
							key={index}
							style={[
								styles.itemContainer,
								{
									backgroundColor: selected ? Colors.primary : Colors.secondary,
								},
							]}>
							{value && <Text style={styles.itemText}>{value}</Text>}
						</TouchableOpacity>
					);
				})}
		</View>
	);
};

export default NewSelectionBar;
