/** Dependencies */
import React from 'react';
import PropTypes from 'prop-types';

/** Components & Helpers */
import Pagination from '../pagination/Pagination';
import convertDate from '../../helpers/convertDate';

/** Styles */
import './CommitList.css';

const DEFAULT_AVATAR = 'https://github.com/identicons/jasonlong.png';

/**
 * Creates Card for each commit passed into commits
 *
 * Repositories -> RepoList -> CommitHistoryAccordion -> CommitList
 *
 * @param {array}     commits         Array of repository commits.
 * @param {number}    currentPage	  Current Page number in pagination.
 * @param {number}    perPage		  Number of elements to display per page in pagination.
 * @param {number}    total           Total number of elements in repositories array.
 * @param {function}  paginate        Sets state of current page in pagination.
 */
function CommitList({ commits, currentPage, perPage, total, paginate }) {
	const CommitList = commits.map((commit) => {
		// If committer is a different user than the author, commit.committer will return `null`
		// Set author as committer instead if commit.committer is `null`
		const committer = commit.committer
			? { name: commit.committer.login, avatar: commit.committer.avatar_url }
			: {
					name: commit.commit.committer.name,
					avatar: DEFAULT_AVATAR,
			  };
		return (
			<li key={commit.sha} className="Commit-Card">
				<div className="Commit-Header">
					<p>{commit.commit.message}</p>
				</div>
				<div className="Commit-Body">
					<div className="Commit-Body__Left">
						<img src={committer.avatar} alt={committer.name} />
					</div>
					<div className="Commit-Body__Right">
						<p className="username">{committer.name}</p>
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
		);
	});

	return (
		<>
			<ul className="Commit-List" data-testid="commit-list">
				{CommitList}
			</ul>
			<Pagination
				currentPage={currentPage}
				perPage={perPage}
				total={total}
				paginate={paginate}
			/>
		</>
	);
}

CommitList.propTypes = {
	commits: PropTypes.array,
};

export default CommitList;
