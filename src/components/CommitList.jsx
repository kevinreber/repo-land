/** Dependencies */
import React from 'react';
import PropTypes from 'prop-types';

/** Helpers */
import convertDate from '../helpers/convertDate';

/** Styles */
import './styles/CommitList.css';

/**
 * Creates Card for each commit passed into commits
 *
 * Repositories -> RepoList -> CommitHistoryAccordion -> CommitList
 *
 * @param {array} commits
 */
function CommitList({ commits }) {
	const CommitList = commits.map((commit) => (
		<li className="Commit-Card">
			<div className="Commit-Header">
				<p>{commit.message}</p>
			</div>
			<div className="Commit-Body">
				<div className="Commit-Body__Left">
					<img src={commit.committerAvatar} alt={commit.committerName} />
				</div>
				<div className="Commit-Body__Right">
					<p className="username">{commit.committerName}</p>
					<p>committed {convertDate(commit.commitDate)}</p>
				</div>
			</div>
			<div className="Commit-Footer">
				<p>
					commit:
					<span className="Commit-Hash"> {commit.sha}</span>
				</p>
			</div>
		</li>
	));

	return (
		<>
			<ul className="Commit-List">{CommitList}</ul>
		</>
	);
}

CommitList.propTypes = {
	commits: PropTypes.array,
};

export default CommitList;
