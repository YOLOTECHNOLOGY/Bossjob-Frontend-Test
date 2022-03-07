import PropTypes from 'prop-types';
import React from 'react';
import SearchIcon from '../../../assets/images/search.svg';
import { SectionDivider } from '../../shared/uikit/SectionDivider';

import './Search.less';

export const Search = ({className, onValueFilter}) => {
	const textFieldRef = React.createRef();
	const handleFilterResult = () => {
		const filterValue = textFieldRef.current.value;
		onValueFilter(filterValue);
	};
	
	return (<div className={`search-container ${className}`}>
		<div className="search-input-container">
			<img className='search-icon' src={SearchIcon} alt="Search" />
			<input ref={textFieldRef} placeholder='Search for job title or company name' className='search-text-box' type="text" name="name" />
		</div>
		<SectionDivider></SectionDivider>
		<button onClick={handleFilterResult} className='filter-button'>Filter Results</button>
	</div>);
};
Search.propTypes = {
	className: PropTypes.string.isRequired,
	onValueFilter: PropTypes.func.isRequired,
};
