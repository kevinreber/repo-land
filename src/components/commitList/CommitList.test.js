import React from 'react';
import { render } from '@testing-library/react';
import CommitList from './CommitList';
import { commitData } from '../../temp/data';

it('should render without crashing', () => {
	render(<CommitList commits={commitData.response.data} />);
});
