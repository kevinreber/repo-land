import React from 'react';
import { render } from '@testing-library/react';
import NoData from './NoData';

it('should render without crashing', () => {
	render(<NoData text={'repositories'} />);
});
