import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

jest.mock('./redux/store.js', () => ({
	store: {
		dispatch() {
			return false;
		},
		getState() {
			return {pages: {'1' : {jobs:[], total_num: 0, total_pages: 1}},
				isLoading: false,
				currentPageNo: 1, 
				totalPages: 1,
				filterValue: null};
		},
		subscribe() {
			return false;
		},
	}
}));

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App />, div);
	ReactDOM.unmountComponentAtNode(div);
});
