import React from 'react';
import { render } from '@testing-library/react';
import Repositories from './Repositories';
import { repoData } from '../temp/data';

it('should render without crashing', () => {
	render(
		<Repositories
			repositories={repoData.response.data}
			organization={'Netflix'}
		/>
	);
});
