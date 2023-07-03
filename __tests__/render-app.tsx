/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../src/app';
import renderer from 'react-test-renderer';

it('Check App Should Run and Renders correctly', async () => {
	await renderer.create(<App />);
});
