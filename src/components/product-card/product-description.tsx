/** @format */

import React from 'react';
import { getSliptedValue } from '../../utils/splitted-value';

const ProductDescription = ({ title }: allAnyTypes) => {
	let modifiedValue: string | undefined = '';
	if (title && title?.length >= 1) {
		getSliptedValue(title)
			?.slice(0, 5)
			?.map((item: string[]) => {
				modifiedValue = modifiedValue + ' ' + '' + item;
			});
		return modifiedValue;
	}
	return 'N/A';
};

export default React.memo(ProductDescription);
