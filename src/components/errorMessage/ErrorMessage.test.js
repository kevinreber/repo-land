import React from 'react';
import { render } from '@testing-library/react';
import ErrorMessage from './ErrorMessage';

it('should render without crashing', () => {
	render(<ErrorMessage />);
});
