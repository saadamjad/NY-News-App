/** @format */

import { createSelector } from 'reselect';
import get from 'lodash.get';

const baseSelector = (state: allAnyTypes) => state?.features?.user;

export const data = createSelector(baseSelector, (state) => state);

export const getAccessToken = createSelector(data, (data) =>
	get(data, 'access_token', '')
);

export const isLoading = createSelector(data, (data) =>
	get(data, 'loader', false)
);
