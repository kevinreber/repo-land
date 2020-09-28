/** Dependencies */
import React from 'react';
import PropTypes from 'prop-types';

/** Components */
import History from './Icons/History';

/** Styles */
import './styles/Accordion.css';

/**
 * Accordion component of Repo Card that displays the most recent 5 commits
 *
 * @param {string} name Name of repository
 */
function CommitHistoryAccordion({ name }) {
	return (
		<div className="Repo-Card__Commit-Toggle">
			<div id={`${name}-Commit-History`}>
				<h5 className="mb-0">
					<button
						className="btn btn-link collapsed"
						data-toggle="collapse"
						data-target={`#collapse${name}`}
						aria-expanded="false"
						aria-controls={`collapse${name}`}>
						<History />
						Recent Commits
					</button>
				</h5>
			</div>
			<div
				id={`collapse${name}`}
				className="collapse"
				aria-labelledby={`heading${name}`}
				data-parent="#accordion">
				<div class="card-body">{name} commit list</div>
			</div>
		</div>
	);
}

CommitHistoryAccordion.propTypes = {
	name: PropTypes.string.isRequired,
};

export default CommitHistoryAccordion;
