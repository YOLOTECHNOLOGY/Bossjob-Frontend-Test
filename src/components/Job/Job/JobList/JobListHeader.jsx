import PropTypes from 'prop-types';
import React from 'react';
import { MenuDivider } from '../../../shared/uikit/MenuDivider';

import './JobListHeader.css';

export const JobListHeader = ({jobTitle, jobPay, className}) => (
	<MenuDivider className={`job-header ${className}`}>
		<MenuDivider.MenuLeftDivider className='job-header-left-divider'>
			{jobTitle}
		</MenuDivider.MenuLeftDivider>
		<MenuDivider.MenuRightDivider className='job-header-right-divider'>
			{jobPay}
		</MenuDivider.MenuRightDivider>
	</MenuDivider>
);

JobListHeader.propTypes = {
	jobTitle: PropTypes.string.isRequired,
	jobPay: PropTypes.string.isRequired,
	className: PropTypes.string,
};
JobListHeader.defaultProps = {
	className: ''
};
