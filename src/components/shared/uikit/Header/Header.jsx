import PropTypes from 'prop-types';
import React from 'react';

import Logo from '../../../../assets/images/Logo.svg';
import { SectionDivider } from '../SectionDivider';
import './Header.css';

export const Header = ({className}) => (
	<>
		<header className={`Header ${className}`}>
			<img src={Logo} width="120" alt="Bossjob" />
		</header>
		<SectionDivider></SectionDivider>
	</>
);

Header.propTypes = {
	className: PropTypes.string,
};
Header.defaultProps = {
	className: '',
};
