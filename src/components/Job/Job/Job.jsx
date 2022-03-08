import PropTypes from 'prop-types';
import React, {useState, useEffect} from 'react';
import { SectionDivider } from '../../shared/uikit/SectionDivider';

import './Job.css';
import { JobList } from './JobList/JobList';
import { Pagination } from '../../shared/uikit/Pagination/Pagination';
import {Header} from '../../shared/uikit/Header';
import {Search} from '../Search';
import {store} from '../../../redux/store';
import { getPageByNo } from '../../../utils/JobUtils';

export const Job = () => {
	const onValueFilter = (value) => {
		store.dispatch({type: 'filterValue', payload: value});
		store.dispatch({type: 'currentPageNo', payload: 1});
	};

	useEffect(() => {
		store.dispatch({type: 'currentPageNo', payload: 1});
	}, []);

	const {pages, isLoading, currentPageNo, filterValue} = store.getState();
	const page = getPageByNo(pages, currentPageNo, filterValue);

	const [currentPage, setCurrentPage] = useState(page);
	const [loading, setLoading] = useState(isLoading);

	store.subscribe(() => {
		const {pages, isLoading, currentPageNo, filterValue} = store.getState();
		const page = getPageByNo(pages, currentPageNo, filterValue);
		setCurrentPage(page);
		setLoading(isLoading);
	});

	return (
		<div className='job-container'>
			<Header className='Header-Wrapper' />
			<Search onValueFilter={onValueFilter} className='Search-Wrapper' />
			{loading ? (
				<div className='job-body-loading-container'> Page is loading... Please wait </div>
			) : ( <div className='job-body-container'>
				<JobCountText className='count-container' totalNum={currentPage ? currentPage.total_num : 0}></JobCountText>
				<SectionDivider></SectionDivider>
				<JobList page={currentPage}></JobList>
				<Pagination></Pagination>
			</div>)}
		</div>);
};


const JobCountText = ({totalNum, className}) => {
	return (<div className={className}>{`${totalNum} jobs found`}</div>);
};

JobCountText.propTypes = {
	totalNum: PropTypes.number.isRequired,
	className: PropTypes.string,
};
JobCountText.defaultProps = {
	className: '',
};
