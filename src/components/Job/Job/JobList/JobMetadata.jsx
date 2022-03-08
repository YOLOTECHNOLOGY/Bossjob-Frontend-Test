import PropTypes from 'prop-types';
import React from 'react';
import Location from '../../../../assets/images/location.svg';
import { ImageDescriptor } from '../../ImageDescriptor';
import { FaSuitcase } from 'react-icons/fa';
import {GiGraduateCap} from 'react-icons/gi';
import {IoTimeOutline} from 'react-icons/io5';
import './JobMetadata.css';
import { MenuDivider } from '../../../shared/uikit/MenuDivider';

export const JobMetadata = ({location, experienceLevel, degree, type, className}) => (
	<>
		<MenuDivider separatedType='immediate' className={`job-metadata-container-1 ${className}`}>
			<MenuDivider.MenuLeftDivider className='job-metadata-left-divider-1'>
				<ImageDescriptor src={Location} text={location} altText='location' size='small'></ImageDescriptor>
			</MenuDivider.MenuLeftDivider>
			<MenuDivider.MenuRightDivider className='job-metadata-right-divider-1'>
				<ImageDescriptor icon={<FaSuitcase/>} text={experienceLevel}></ImageDescriptor>
			</MenuDivider.MenuRightDivider>
		</MenuDivider>
		<MenuDivider separatedType='immediate' className={`job-metadata-container-2 ${className}`}>
			<MenuDivider.MenuLeftDivider className='job-metadata-left-divider-2'>
				<ImageDescriptor icon={<GiGraduateCap/>} text={degree}></ImageDescriptor>
			</MenuDivider.MenuLeftDivider>
			<MenuDivider.MenuRightDivider className='job-metadata-right-divider-2'>
				<ImageDescriptor icon={<IoTimeOutline/>} text={type}></ImageDescriptor>
			</MenuDivider.MenuRightDivider>
		</MenuDivider>
	</>
);

JobMetadata.propTypes = {
	location: PropTypes.string.isRequired, 
	experienceLevel: PropTypes.string.isRequired,
	degree: PropTypes.string.isRequired, 
	type: PropTypes.string.isRequired, 
	className: PropTypes.string,
};
JobMetadata.defaultProps = {
	className: ''
};
