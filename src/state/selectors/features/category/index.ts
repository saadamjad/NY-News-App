import {createSelector} from 'reselect';
import get from 'lodash.get';

const baseSelector = (state: allAnyTypes) => state?.features?.category;

export const data = createSelector(baseSelector, (state) => state);

export const getNewsData = createSelector(data, (data) =>
	get(data, 'topNews.news', [])
);

export const isLoading = createSelector(data, data =>
  get(data, 'loader', false),
);
