import { call, put, select, takeLatest } from 'redux-saga/effects';
import {fetchNextPage, fetchFilteredJobs} from '../apis/JobApi';
import { getPageByNo } from '../utils/JobUtils';

function* fetchPage(action) {
	const {pages, filterValue} = yield select();
	//skip fetching pages from API if the page is already loaded into redux
	let page = getPageByNo(pages, action.payload, filterValue);
	if (page) {
		if (page.total_pages > 0)
			yield put({type: 'paginationPages', payload: page.total_pages, pageNum: action.payload});
		return;
	}
	let newPages;
	yield put({type: 'loading', payload: true});
	if (filterValue) {
		newPages = yield call(fetchFilteredJobs, action.payload, filterValue);
	} else {
		newPages = yield call(fetchNextPage, action.payload);
	}
	yield put({type: 'pages', payload: newPages, pageNum: action.payload, filterValue: filterValue});
	if (newPages.total_pages > 0)
		yield put({type: 'paginationPages', payload: newPages.total_pages, pageNum: action.payload});
	yield put({type: 'loading', payload: false});
}

export function* mySaga() {
	yield takeLatest('currentPageNo', fetchPage);
}
