/** @format */

import configureStore from 'redux-mock-store';

const navigationMock = { navigate: jest.fn() } as any;
const mockStore = configureStore();

const store = (data: allAnyTypes) => mockStore(data);

export { store, navigationMock };
