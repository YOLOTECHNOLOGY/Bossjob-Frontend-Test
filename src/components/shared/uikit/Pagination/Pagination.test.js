import {render, fireEvent, act, screen} from '@testing-library/react';
import React from 'react';
import { Pagination } from './Pagination';
import {store} from '../../../../redux/store';

const DEFAULT_TOTAL_PAGES = 5;
jest.mock('../../../../redux/store', () => ({
	store: {
		dispatch() {
			return false;
		},
		getState() {
			return {pages: {'1' : { total_pages: 4}},
				currentPageNo: 1, totalPages: 4,};
		},
	}
}));

const renderPage = () => {
	return render(<Pagination id={1}/>);
};


test('render pages with no next or previous section correctly', async () => {
	const {getByTestId} = renderPage();
	await expect(getByTestId('previous-pages').className).toContain('pagination-section-disabled');
	for (var i=1; i<=4; i++) {
		await expect(getByTestId(`page-${i}`)).toBeTruthy();
	}
	await expect(getByTestId('next-pages').className).toContain('pagination-section-disabled');
});

test('render more pages with sections correctly', async () => {
	jest.spyOn(store, 'getState').mockReturnValue({currentPageNo: 1, totalPages: 17});
	const {getByTestId} = renderPage();
	await expect(getByTestId('previous-pages').className).toContain('pagination-section-disabled');
	for (var i=1; i<=DEFAULT_TOTAL_PAGES; i++) {
		await expect(getByTestId(`page-${i}`)).toBeTruthy();
	}
	await expect(getByTestId('next-pages').className).not.toContain('pagination-section-disabled');
});

test('test next section navigation correctly', async () => {
	jest.spyOn(store, 'getState').mockReturnValue({currentPageNo: 6, totalPages: 17});
	const {getByTestId} = renderPage();
	await expect(getByTestId('previous-pages').className).not.toContain('pagination-section-disabled');
	for (var i=6; i<=DEFAULT_TOTAL_PAGES+5; i++) {
		await expect(getByTestId(`page-${i}`)).toBeTruthy();
	}
	await expect(getByTestId('next-pages').className).not.toContain('pagination-section-disabled');
});

test('test last page selected correctly', async () => {
	jest.spyOn(store, 'getState').mockReturnValue({currentPageNo: 17, totalPages: 17});
	const {getByTestId} = renderPage();
	for (var i=1; i<=DEFAULT_TOTAL_PAGES; i++) {
		await expect(getByTestId(`page-${i}`)).toBeTruthy();
	}
});
