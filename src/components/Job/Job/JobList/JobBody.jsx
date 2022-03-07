import PropTypes from 'prop-types';
import React from 'react';

import { ImageDescriptor } from '../../ImageDescriptor';
import OptumLogo from '../../../../assets/images/OptumLogo.png';
import { MenuDivider } from '../../../shared/uikit/MenuDivider';


export const JobBody = ({companyLogoSrc, companyName, lastUpdated}) => (
	<MenuDivider>
		<MenuDivider.MenuLeftDivider>
			<ImageDescriptor className={'image-descriptor-body'} src={companyLogoSrc} text={companyName} altText='logo' size='medium'></ImageDescriptor>
		</MenuDivider.MenuLeftDivider>
		<MenuDivider.MenuRightDivider className='greyed-out-item'>
			{lastUpdated}
		</MenuDivider.MenuRightDivider>
	</MenuDivider>
);

JobBody.propTypes = {
	companyLogoSrc: PropTypes.string.isRequired,
	companyName: PropTypes.string.isRequired,
	lastUpdated: PropTypes.string.isRequired,
};
