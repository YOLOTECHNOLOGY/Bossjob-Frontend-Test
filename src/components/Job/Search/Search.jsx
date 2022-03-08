import PropTypes from 'prop-types';
import React from 'react';
import SearchIcon from '../../../assets/images/search.svg';
import { SectionDivider } from '../../shared/uikit/SectionDivider';

import './Search.css';

export const Search = ({className, onValueFilter}) => {
	const textFieldRef = React.createRef();
	const handleFilterResult = () => {
		const filterValue = textFieldRef.current.value;
		onValueFilter(filterValue);
	};
	
	return (<div className={`search-container ${className}`}>
		<div className="search-input-container">
			<img className='search-icon' src={SearchIcon} alt="Search" />
			<input data-testid='search-text-box-input' ref={textFieldRef} placeholder='Search for job title or company name' className='search-text-box' type="text" name="name" />
		</div>
		<SectionDivider></SectionDivider>
		<button data-testid='search-button-on-filter'  onClick={handleFilterResult} className='filter-button'>Filter Results</button>
	</div>);
};
Search.propTypes = {
	className: PropTypes.string,
	onValueFilter: PropTypes.func.isRequired,
};
Search.defaultProps = {
	className: '',
};
