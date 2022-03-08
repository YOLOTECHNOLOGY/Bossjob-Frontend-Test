import PropTypes from 'prop-types';
import React, {useState, useEffect} from 'react';
import {range} from 'lodash';
import {store} from '../../../../redux/store';

import './Pagination.css';

export const Pagination = () => {
	let extended = false;
	const {currentPageNo, totalPages} = store.getState();
	const getRangeArray = (offset=1) => {
		const position = Math.ceil(currentPageNo / 5);
		let startPage = 1 + (5 * (position - offset));
		startPage = currentPageNo === totalPages ? 1: startPage;
		const sectionEndInteger = totalPages <= 5 || startPage + 5 > totalPages ? totalPages + 1 : function () {
			extended = true;
			return startPage + 5;
		}();
		extended = extended && (startPage < totalPages - 5 || sectionEndInteger !== totalPages);
		return [startPage, sectionEndInteger];
	};
	const ranges = getRangeArray();

	const handleFirstPageDisabled = (start) => {
		return start <= 1;
	};

	const handleLastPageDisabled = () => {
		return totalPages <= 5 || currentPageNo === totalPages;
	};
	const [firstPageSection, setFirstPageSection] = useState({start: ranges[0], disabled: handleFirstPageDisabled(ranges[0])});
	const [lastPageSection, setLastPageSection] = useState({end: ranges[1], disabled: handleLastPageDisabled()});

	useEffect(() => {
		const start = firstPageSection.start;
		setFirstPageSection({start, disabled: handleFirstPageDisabled(start)});
	}, [firstPageSection.start]);

	useEffect(() => {
		setLastPageSection({...lastPageSection, disabled: handleLastPageDisabled()});
	}, [currentPageNo]);

	useEffect(() => {
		if (firstPageSection.start === ranges[0] && lastPageSection.end === ranges[1]) {
			return;
		}
		setFirstPageSection({start: ranges[0], disabled: handleFirstPageDisabled(ranges[0])});
		setLastPageSection({end: ranges[1], disabled: handleLastPageDisabled()});
	}, [ranges]);

	const paginationPageClassName = 'pagination-page-num';
	const paginationPageActiveClassName = paginationPageClassName + ' active';
	const sectionClassName = 'pagination-section';
	let previousSectionClassName = sectionClassName;
	let nextSectionClassName = sectionClassName;

	if (firstPageSection.disabled) {
		previousSectionClassName += ' pagination-section-disabled';
	}

	if (lastPageSection.disabled) {
		nextSectionClassName += ' pagination-section-disabled';
	}

	const handlePageClick = (pageNo) => {
		store.dispatch({type: 'currentPageNo', payload: pageNo});
	};
	const handleLastPageClick = () => {
		store.dispatch({type: 'currentPageNo', payload: totalPages});
	};

	const handlePreviousSection = () => {
		if (firstPageSection.disabled) {
			return;
		}
		const [start, end] = getRangeArray(2);
		setFirstPageSection({start, disabled: handleFirstPageDisabled(start)});
		setLastPageSection({end, disabled: handleLastPageDisabled()});
		handlePageClick(start);
	};

	const handleNextSection = () => {
		if (lastPageSection.disabled) {
			return;
		}
		const [start, end] = getRangeArray(0);
		setFirstPageSection({start, disabled: handleFirstPageDisabled(start)});
		const disabled = handleLastPageDisabled();
		extended = !disabled;
		setLastPageSection({end, disabled});
		handlePageClick(start);
	};

	return (<div className='pagination-container'>
		<div data-testid='previous-pages' onClick={handlePreviousSection} className={previousSectionClassName}>{'<'}</div>
		{range(firstPageSection.start, lastPageSection.end).map((pageNo) => {
			let className =  paginationPageClassName;
			if (pageNo === currentPageNo) {
				className = paginationPageActiveClassName;
			}
			return (<div data-testid={`page-${pageNo}`} onClick={() => handlePageClick(pageNo)} className={className} key={pageNo}>{pageNo}</div>);
		})}
		{extended && (
			<>
				<div className='pagination-ellipsis'>{'...'}</div>
				<div data-testid={`page-${totalPages}`} className={totalPages === currentPageNo ? paginationPageActiveClassName: paginationPageClassName} onClick={handleLastPageClick} key={totalPages}>{totalPages}</div>
			</>
		)}
		<div data-testid='next-pages' onClick={handleNextSection} className={nextSectionClassName}>{'>'}</div>
	</div>
	);
};
