import PropTypes from 'prop-types';
import React from 'react';
import { MenuDivider } from '../../../shared/uikit/MenuDivider';

import './JobListHeader.less';

export const JobListHeader = ({jobTitle, jobPay}) => (
	<MenuDivider>
		<MenuDivider.MenuLeftDivider className='job-header'>
			{jobTitle}
		</MenuDivider.MenuLeftDivider>
		<MenuDivider.MenuRightDivider className='job-header'>
			{jobPay}
		</MenuDivider.MenuRightDivider>
	</MenuDivider>
);

JobListHeader.propTypes = {
	jobTitle: PropTypes.string.isRequired,
	jobPay: PropTypes.string.isRequired,
};
