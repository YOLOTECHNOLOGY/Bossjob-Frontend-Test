import PropTypes from 'prop-types';
import React from 'react';
import { IconContext } from 'react-icons';

import './ImageDescriptor.css';

export const ImageDescriptor = ({className, icon, text, src, altText, size}) => {
	let iconEl;
	if (icon) {
		iconEl = <IconContext.Provider value={{ color: '#2379ea', className: 'icon-with-context' }}>{icon}</IconContext.Provider>;
	}
	// assuming src is of svg or png type already has required styles defined, hence not wrapping with iconContext provider.
	else {
		let className = size ? `icon--${size}` : 'icon';
		iconEl = <img className={className} src={src} alt={altText} />;
	}
	return (<div className={`image-container ${className}`}>
		{iconEl}
		{text}
	</div>);
};

const requiredPropsCheck = (props, _propName, componentName) => {
	if (!props.icon && props.src === undefined) {
		return new Error(`One of 'icon' or 'src' is required by '${componentName}' component.`);
	}
};

ImageDescriptor.propTypes = {
	icon: requiredPropsCheck,
	src: requiredPropsCheck,
	text: PropTypes.string.isRequired,
	altText: PropTypes.string,
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	className: PropTypes.string,
};

ImageDescriptor.defaultProps = {
	className: '',
	altText: 'image',
	size: 'small',
};
