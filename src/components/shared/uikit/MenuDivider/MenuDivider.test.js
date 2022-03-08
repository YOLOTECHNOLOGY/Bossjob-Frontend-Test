import {render} from '@testing-library/react';
import React from 'react';
import { MenuDivider } from './MenuDivider';

test ('Set two elements separately', () => {
	const {getByTestId} =  render(
		<MenuDivider separatedType='separate'>
			<MenuDivider.MenuLeftDivider>
				<div>Left Content</div>
			</MenuDivider.MenuLeftDivider>
			<MenuDivider.MenuRightDivider>
				<div>Right Content</div>
			</MenuDivider.MenuRightDivider>
		</MenuDivider>);

	expect(getByTestId('menu-left-divider').textContent).toBe('Left Content');
	expect(getByTestId('menu-right-divider').textContent).toBe('Right Content');
	const menuDivider = getByTestId('menu-divider-container');
	expect(menuDivider.className).toContain('separate');
});

test ('Set two elements immediate', () => {
	const {getByTestId} =  render(
		<MenuDivider separatedType='immediate'>
			<MenuDivider.MenuLeftDivider>
				<div>Left Content</div>
			</MenuDivider.MenuLeftDivider>
			<MenuDivider.MenuRightDivider>
				<div>Right Content</div>
			</MenuDivider.MenuRightDivider>
		</MenuDivider>);

	expect(getByTestId('menu-left-divider').textContent).toBe('Left Content');
	expect(getByTestId('menu-right-divider').textContent).toBe('Right Content');
	const menuDivider = getByTestId('menu-divider-container');
	expect(menuDivider.className).toContain('immediate');
});
