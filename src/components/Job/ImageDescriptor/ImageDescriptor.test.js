import {render} from '@testing-library/react';
import React from 'react';
import { ImageDescriptor } from './ImageDescriptor';
import { FaSuitcase } from 'react-icons/fa';

test('Should render the prop image correctly', () => {
	const {container, findByText} = render(<ImageDescriptor src='dummySrc' text={'logo displayed'}></ImageDescriptor>);
	expect(container.querySelector('.icon--small')).toBeTruthy();
	expect(container.querySelector('.icon-with-context')).toBeNull();
	expect(findByText('logo displayed')).toBeTruthy();
});

test('Should render the prop image correctly', () => {
	const {container, findByText} = render(<ImageDescriptor icon={<FaSuitcase/>} text={'logo displayed'}></ImageDescriptor>);
	expect(container.querySelector('.icon--small')).toBeNull();
	expect(container.querySelector('.icon-with-context')).toBeTruthy();
	expect(findByText('logo displayed')).toBeTruthy();
});
