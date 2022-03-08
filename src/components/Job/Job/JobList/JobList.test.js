import {render} from '@testing-library/react';
import React from 'react';
import { JobList } from './JobList';
import {convertSalariesToCurrency, getUpdatedInfo} from '../../../../utils/JobUtils';

const getJob = () => {
	return {id: 1, company_country: 'Singapore', salary_range_from: 200000, salary_range_to: 700000, 
		job_title: 'Software Engineer', company_location: 'woodlands', xp_lvl: '3-5 years', degree: 'B.E', 
		job_type: 'Full Time', company_logo: 'dummy_logo', company_name: 'Boss job', updated_at: new Date().toISOString()};
};

const job = getJob();

const renderJob = (overrideProps) => {
	const page = {jobs: [job]};
	return render(<JobList page={page} {...overrideProps}/>);
};


test('should not render job list children when jobs are empty', () => {
	const page = {1: {jobs: []}};
	const {container} = renderJob({page});
	expect(container.querySelector('.job-list-container')).toBeNull();
});

test('should render jobs correctly when passed values', () => {
	const {container} = renderJob();
	expect(container.querySelectorAll('.job-list-container').length).toBe(1);
});

test('should render job list header correctly', () => {
	const salaries = convertSalariesToCurrency(job.company_country, job.salary_range_from, job.salary_range_to);
	const {container} = renderJob();
	expect(container.querySelector('.job-header-left-divider').textContent).toBe(job.job_title);
	expect(container.querySelector('.job-header-right-divider').textContent).toBe(salaries);
});

test('should render job list metadata correctly', () => {
	const {container} = renderJob();
	expect(container.querySelector('.job-metadata-left-divider-1').textContent).toBe(job.company_location);
	expect(container.querySelector('.job-metadata-right-divider-1').textContent).toBe(job.xp_lvl);
	expect(container.querySelector('.job-metadata-left-divider-2').textContent).toBe(job.degree);
	expect(container.querySelector('.job-metadata-right-divider-2').textContent).toBe(job.job_type);
});

test('should render job list body correctly', () => {
	const updatedInfo = getUpdatedInfo(job.updated_at);
	const {container} = renderJob();
	expect(container.querySelector('.job-body-left-divider').textContent).toBe(job.company_name);
	expect(container.querySelector('.job-body-right-divider').textContent).toBe(updatedInfo);
});
