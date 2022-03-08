module.exports = {
	'transform': {
		'^.+\\.(js|jsx)$': 'babel-jest',
		'.+\\.(svg|css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub'
	},
	'testPathIgnorePatterns': ['/node_modules/', '/dist/'],
	'testEnvironment': 'jsdom',
	'setupFilesAfterEnv': ['<rootDir>/src/setupTests.js'],
};
