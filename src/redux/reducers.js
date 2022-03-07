import {getPageKey} from '../utils/JobUtils';

export const reducers = (state = {currentPageNo: 1, pages: {}, totalPages: 0, filterValue: null}, action) => {
	switch (action.type) {
	case 'currentPageNo':
		return {...state, currentPageNo: action.payload};
	case 'pages':
	{
		let {pages} = state;
		let pageKey = getPageKey(action.pageNum, action.filterValue);
		pages[pageKey] = action.payload;
		return {...state, ...pages};
	}
	case 'paginationPages':
		return {...state, totalPages: action.payload === null ? 0 : action.payload};
	case 'filterValue':
		return {...state, filterValue: action.payload};
	case 'loading':
		return {...state, isLoading: action.payload};
	default:
		return state;
	}
};
