import PropTypes from 'prop-types';
import React from 'react';

import { ImageDescriptor } from '../../ImageDescriptor';
import { MenuDivider } from '../../../shared/uikit/MenuDivider';


export const JobBody = ({companyLogoSrc, companyName, lastUpdated, className}) => {
	return <MenuDivider className={`job-body ${className}`}>
		<MenuDivider.MenuLeftDivider className='job-body-left-divider'>
			<ImageDescriptor className={'image-descriptor-body'} src={companyLogoSrc} text={companyName} altText='logo' size='medium'></ImageDescriptor>
		</MenuDivider.MenuLeftDivider>
		<MenuDivider.MenuRightDivider className='job-body-right-divider greyed-out-item'>
			{lastUpdated}
		</MenuDivider.MenuRightDivider>
	</MenuDivider>;
};

JobBody.propTypes = {
	companyLogoSrc: PropTypes.string.isRequired,
	companyName: PropTypes.string.isRequired,
	lastUpdated: PropTypes.string.isRequired,
	className: PropTypes.string,
};
JobBody.defaultProps = {
	className: ''
};
