import PropTypes from 'prop-types';
import React from 'react';
import { JobListHeader } from './JobListHeader';
import { JobMetadata } from './JobMetadata';
import { JobBody } from './JobBody';
import { SectionDivider } from '../../../shared/uikit/SectionDivider';
import {convertSalariesToCurrency, getUpdatedInfo} from '../../../../utils/JobUtils';

import './JobList.css';

export const JobList = ({page}) => {
	if (!page || !page.jobs) {
		return <></>;
	}
	return page.jobs.map((job) => (
		<div className='job-list-container' key={job.id}>
			<JobListHeader className='job-list-header' jobPay={convertSalariesToCurrency(job.company_country, job.salary_range_from, job.salary_range_to)} jobTitle={job.job_title}/>
			<JobMetadata className='job-list-metadata' location={job.company_location} experienceLevel={job.xp_lvl} degree={job.degree} type={job.job_type}></JobMetadata>
			<JobBody className='job-list-body' companyLogoSrc={job.company_logo} companyName={job.company_name} lastUpdated={getUpdatedInfo(job.updated_at)}></JobBody>
			<SectionDivider></SectionDivider>
		</div>
	));
};

JobList.propTypes = {
	page: PropTypes.object.isRequired,
};
