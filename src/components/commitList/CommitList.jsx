/** Dependencies */
import React from 'react';
import PropTypes from 'prop-types';

/** Components & Helpers */
import Pagination from '../pagination/Pagination';
import convertDate from '../../helpers/convertDate';

/** Styles */
import './CommitList.css';

/**
 * Creates Card for each commit passed into commits
 *
 * Repositories -> RepoList -> CommitHistoryAccordion -> CommitList
 *
 * @param {array} commits
 */
function CommitList({ currentPage, commits, paginate }) {
	console.log(commits);
	const CommitList = commits.map((commit) => (
		<li key={commit.sha} className="Commit-Card">
			<div className="Commit-Header">
				<p>{commit.commit.message}</p>
			</div>
			<div className="Commit-Body">
				<div className="Commit-Body__Left">
					<img src={commit.committer.avatar_url} alt={commit.committer.login} />
				</div>
				<div className="Commit-Body__Right">
					<p className="username">{commit.committer.login}</p>
					<p>committed {convertDate(commit.commit.committer.date)}</p>
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
			<Pagination currentPage={currentPage} paginate={paginate} />
		</>
	);
}

CommitList.propTypes = {
	commits: PropTypes.array,
};

export default CommitList;
