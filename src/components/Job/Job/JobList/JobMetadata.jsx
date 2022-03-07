import PropTypes from 'prop-types';
import React from 'react';
import Location from '../../../../assets/images/location.svg';
import { ImageDescriptor } from '../../ImageDescriptor';
import { FaSuitcase } from 'react-icons/fa';
import {GiGraduateCap} from 'react-icons/gi';
import {IoTimeOutline} from 'react-icons/io5';
import './JobMetadata.less';
import { MenuDivider } from '../../../shared/uikit/MenuDivider';

export const JobMetadata = ({location, experienceLevel, degree, type}) => (
	<>
		<MenuDivider separatedType='immediate'>
			<MenuDivider.MenuLeftDivider>
				<ImageDescriptor src={Location} text={location} altText='location' size='small'></ImageDescriptor>
			</MenuDivider.MenuLeftDivider>
			<MenuDivider.MenuRightDivider>
				<ImageDescriptor icon={<FaSuitcase/>} text={experienceLevel}></ImageDescriptor>
			</MenuDivider.MenuRightDivider>
		</MenuDivider>
		<MenuDivider separatedType='immediate'>
			<MenuDivider.MenuLeftDivider>
				<ImageDescriptor icon={<GiGraduateCap/>} text={degree}></ImageDescriptor>
			</MenuDivider.MenuLeftDivider>
			<MenuDivider.MenuRightDivider>
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
};
