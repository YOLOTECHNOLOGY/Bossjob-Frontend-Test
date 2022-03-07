import PropTypes from 'prop-types';
import React from 'react';


import './MenuDivider.less';

export const MenuDivider = (props) => (
	<div className={`menu-divider-container ${props.separatedType}`}>{props.children}</div>
);

MenuDivider.propTypes = {
	children: PropTypes.arrayOf(PropTypes.oneOfType([
		PropTypes.shape({
			type: PropTypes.oneOf([MenuLeftDivider]),
		}),
		PropTypes.shape({
			type: PropTypes.oneOf([MenuRightDivider]),
		}),
		PropTypes.node,
	])),
	separatedType: PropTypes.oneOf['separate', 'immediate']
};

MenuDivider.defaultProps = {
	separatedType: 'separate',
};

const MenuLeftDivider = (props) => (
	<div className={`left-divider ${props.className}`}>{props.children}</div>
);

MenuLeftDivider.propTypes = {
	children: PropTypes.object.isRequired,
	className: PropTypes.string,
};

MenuLeftDivider.defaultProps = {
	className: '',
};

const MenuRightDivider = (props) => (
	<div className={`right-divider ${props.className}`}>{props.children}</div>
);

MenuRightDivider.propTypes = {
	children: PropTypes.object.isRequired,
	className: PropTypes.string,
};

MenuRightDivider.defaultProps = {
	className: '',
};

MenuDivider.MenuLeftDivider = MenuLeftDivider;
MenuDivider.MenuRightDivider = MenuRightDivider;
