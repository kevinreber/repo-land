import React from 'react';
import { render } from '@testing-library/react';
import Pagination from './Pagination';

it('should render without crashing', () => {
	render(<Pagination perPage={10} total={100} />);
});
