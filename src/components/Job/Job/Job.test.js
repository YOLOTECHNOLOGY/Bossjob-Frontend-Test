import {render, act} from '@testing-library/react';
import React from 'react';
import {Job} from '../Job';
import {store} from '../../../redux/store';

let subscribeCallback;
jest.mock('../../../redux/store.js', () => ({
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
		subscribe(callback) {
			subscribeCallback = callback;
		},
	}
}));

jest.mock('../../shared/uikit/Pagination/Pagination', () => {
	const Pagination = () => <div />;
	return {Pagination: Pagination};
});

jest.mock('./JobList/JobList', () => {
	const JobList = () => <div />;
	return {JobList: JobList};
});

const renderJob = () => {
	return render(<Job/>);
};

test('check container rendered correctly ', () => {
	const {container} = renderJob();
	expect(container.querySelector('.Search-Wrapper')).toBeTruthy();
	expect(container.querySelector('.Header-Wrapper')).toBeTruthy();
	expect(container.querySelector('.job-body-container')).toBeTruthy();
});

test('should properly set loading div when results are loading', () => {
	jest.spyOn(store, 'getState').mockReturnValue({pages: {'1' : {jobs:[], total_num: 0, total_pages: 1}},
		isLoading: true,
		currentPageNo: 1, 
		filterValue: null}
	);
	const {container} = renderJob();
	expect(container.querySelector('.Search-Wrapper')).toBeTruthy();
	expect(container.querySelector('.Header-Wrapper')).toBeTruthy();
	expect(container.querySelector('.job-body-loading-container')).toBeTruthy();
});

test('should properly display the count of jobs in count container ', () => {
	jest.spyOn(store, 'getState').mockReturnValue({pages: {'1' : {jobs:[], total_num: 20, total_pages: 1}},
		isLoading: false,
		currentPageNo: 1, 
		filterValue: null}
	);
	const {container} = renderJob();
	expect(container.querySelector('.count-container').textContent).toBe('20 jobs found');
});

test('should properly re-render when loading is dispatched to be false ', async () => {
	jest.spyOn(store, 'getState').mockReturnValue({pages: {'1' : {jobs:[], total_num: 0, total_pages: 1}},
		isLoading: true,
		currentPageNo: 1, 
		filterValue: null}
	);
	const {container} = renderJob();
	expect(container.querySelector('.job-body-loading-container')).toBeTruthy();
	expect(container.querySelector('.job-body-container')).toBeNull();
	jest.spyOn(store, 'getState').mockReturnValue({pages: {'1' : {jobs:[{'company_name': 'Example agencies'}], total_num: 20, total_pages: 1}},
		isLoading: false,
		currentPageNo: 1, 
		filterValue: null}
	);
	act(subscribeCallback);
	expect(container.querySelector('.job-body-loading-container')).toBeNull();
	expect(container.querySelector('.job-body-container')).toBeTruthy();
});
