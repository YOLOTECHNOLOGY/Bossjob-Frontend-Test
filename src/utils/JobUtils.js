import { CURRENCY_SYMBOLS } from './JobConstants';

// In case we need to cache the page values in local storage, we can use these methods.
export const getPageByNo = (pages, currentPageNo, filteredValue=null) => {
	const pageKey = getPageKey(currentPageNo, filteredValue);
	if (pages && Object.keys(pages).includes(pageKey)) {
		return pages[pageKey];
	}
	return null;
};

export const getPageKey = (currentPageNo, filteredValue) => {
	const pageNoString = currentPageNo.toString();
	return filteredValue ? `${pageNoString}-${filteredValue.toLowerCase()}` : pageNoString;
};

const priceFormatter = (num) => {
	const lookup = [
		{ value: 1, symbol: '' },
		{ value: 1e3, symbol: 'k' },
		{ value: 1e6, symbol: 'M' },
		{ value: 1e9, symbol: 'G' },
		{ value: 1e12, symbol: 'T' },
		{ value: 1e15, symbol: 'P' },
		{ value: 1e18, symbol: 'E' }
	];
	const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
	var item = lookup.slice().reverse().find(function(item) {
		return num >= item.value;
	});
	return item ? (num / item.value).toFixed(0).replace(rx, '$1') + item.symbol : '0';
};

export const convertSalariesToCurrency = (countryName, salaryFrom, salaryTo) => {
	const symbol = CURRENCY_SYMBOLS[countryName];
	return `${symbol} ${priceFormatter(salaryFrom)} - ${symbol}  ${priceFormatter(salaryTo)}`;
};

export const getUpdatedInfo = (stringDate1) => {
	const lookup = [
		{ value: 0, text: 'Just now' , skipValidation: true},
		{ value: 1, text: 'second' },
		{ value: 60, text: 'minute' },
		{ value: 3600, text: 'hour' },
		{ value: 86400, text: 'day' },
	];

	const date1 = new Date(stringDate1);
	const date2 = new Date();
	const diffTime = Math.abs(date2 - date1);
	const diffSeconds = Math.floor(diffTime / 1000);
	var item = lookup.slice().reverse().find(function(item) {
		return diffSeconds >= item.value;
	});
	let text = item.text;
	if (item.skipValidation) {
		return text;
	}
	const value = Math.floor(diffSeconds/item.value);
	if (value > 1) {
		text += 's';
	}
	return `${value} ${text} ago`;
};
