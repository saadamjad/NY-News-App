/** @format */

module.exports = {
	preset: 'react-native',
	verbose: true,
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

	transformIgnorePatterns: [
		//   // eslint-disable-next-line max-len
		'node_modules/(?!(@react-native|react-native|react-native-image-placeholder|react-native-safe-area-context|react-native-image-placeholde|@react-native-async-storage/async-storage|@react-navigation/stack|react-navigation|@react-navigation/.* )/)',
	],
	setupFiles: ['./__mocks__/setup.js'],
	testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
	moduleNameMapper: {
		'.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
			'identity-obj-proxy',
	},
};
