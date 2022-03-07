import {SERVER_URL} from '../utils/JobConstants';
export const getJobs = () => {
	return new Promise((resolve, reject) => {
		fetch(`${SERVER_URL}`)
			.then((response) => response.json())
			.then((responseJson) => resolve(responseJson.data))
			.catch((message) => reject(message));
	});
};

export const fetchNextPage = (currentPageNum) => {
	return new Promise((resolve, reject) => {
		fetch(`${SERVER_URL}&page=${currentPageNum}`)
			.then((response) => response.json())
			.then((responseJson) => resolve(responseJson.data))
			.catch((message) => reject(message));
	});
};

export const fetchFilteredJobs = (currentPageNum, filterValue) => {
	return new Promise((resolve, reject) => {
		fetch(`${SERVER_URL}&page=${currentPageNum}&query=${filterValue}`)
			.then((response) => response.json())
			.then((responseJson) => resolve(responseJson.data))
			.catch((message) => reject(message));
	});
};

