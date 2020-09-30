import React from 'react';
import { render } from '@testing-library/react';
import RepoList from './RepoList';
import { repoData } from '../../temp/data';

it('should render without crashing', () => {
	render(
		<RepoList repositories={repoData.response.data} organization={'Netflix'} />
	);
});
