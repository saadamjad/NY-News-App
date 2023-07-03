/** @format */

import { createSelector } from 'reselect';
import get from 'lodash.get';

const baseSelector = (state: allAnyTypes) => state?.features?.search;

export const data = createSelector(baseSelector, (state) => state);

export const getSearchData = createSelector(data, (data) =>
	get(data, 'searchData', [])
);

export const getRecentSearches = createSelector(data, (data) =>
	get(data, 'allSearches', [])
);

export const isLoading = createSelector(data, (data) =>
	get(data, 'loader', false)
);
