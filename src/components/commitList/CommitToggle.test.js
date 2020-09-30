import React from 'react';
import {
	render,
	fireEvent,
	getByText,
	waitForElement,
} from '@testing-library/react';
import CommitToggle from './CommitToggle';

describe('<CommitToggle />', () => {
	it('should render without crashing', () => {
		render(<CommitToggle name={'curator'} organization={'Netflix'} />);
	});

	it('should select button by test ID ', () => {
		const { getByTestId } = render(
			<CommitToggle name={'curator'} organization={'Netflix'} />
		);
		const button = getByTestId('commit-list-toggle');
	});

	it('should have class "collapsed"', () => {
		const { getByTestId } = render(
			<CommitToggle name={'curator'} organization={'Netflix'} />
		);
		const commitList = getByTestId('commit-list-container');
		const button = getByTestId('commit-list-toggle');

		expect(commitList).toHaveClass('collapse');
		expect(commitList).not.toHaveClass('show');
		expect(button).toHaveClass('collapsed');
	});
	// it('should not have class "collapsed" after being clicked', async () => {
	// 	const { getByTestId } = render(
	// 		<CommitToggle name={'curator'} organization={'Netflix'} />
	// 	);
	// 	const commitList = getByTestId('commit-list-container');
	// 	const button = getByTestId('commit-list-toggle');

	// 	fireEvent.click(button);
	// 	const collapsedElement = await waitForElement(() =>
	// 		document.querySelector('button.collapse')
	// 	);

	// expect(collapsedElement).toHaveClass('collapse', 'show');
	// expect(button).toHaveClass('collapse');
	// expect(button).not.toHaveClass('collapsed');
	// });
});
