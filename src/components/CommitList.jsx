/** Dependencies */
import React from 'react';
import PropTypes from 'prop-types';

/** Helpers */
import convertDate from '../helpers/convertDate';

/**
 * Creates Card for each commit passed into commits
 *
 * Home -> RepoList -> CommitHistoryAccordion -> CommitList
 *
 * @param {array} commits
 */
function CommitList({ commits }) {
	console.log(commits);
	const CommitList = commits.map((commit) => (
		<li className="Commit-Card">
			<div className="Commit-Header">
				<p>{commit.message}</p>
			</div>
			<div className="Commit-Body">
				<p>
					{commit.committerName} committed on {convertDate(commit.commitDate)}
				</p>
				<p>commit {commit.sha}</p>
			</div>
		</li>
	));

	return <ul className="Commit-List">{CommitList}</ul>;
}

CommitList.propTypes = {
	commits: PropTypes.array,
};

export default CommitList;
