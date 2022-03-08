import {render, fireEvent} from '@testing-library/react';
import React from 'react';
import {Search} from './Search';

test('Should return entered value in text box', () => {
	const mockOnValueFilter = jest.fn();
	const {getByTestId} = render(<Search onValueFilter={mockOnValueFilter}></Search>);
	const inputField = getByTestId('search-text-box-input');
	fireEvent.change(inputField, { target: { value: 'developer' } });
	const button = getByTestId('search-button-on-filter');
	fireEvent.click(button);
	expect(mockOnValueFilter).toBeCalledWith('developer');
});
