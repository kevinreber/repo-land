/** Dependencies */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/** Components & Helpers */
import History from './icons/History';
import CommitList from './CommitList';
import ErrorMessage from './ErrorMessage';
import Loader from './Loader';

/** Hooks */
import useAxios from '../hooks/useAxios';

/** Styles */
import './styles/Accordion.css';

// TEMP - Dummy Data
import { commitData } from '../temp/data';

const COMMIT_BASE_URL = 'https://api.github.com/repos/Netflix';

/**
 * Accordion component of Repo Card that displays the most recent 5 commits.
 *
 * Repositories -> RepoList -> CommitHistoryAccordion -> CommitList
 *
 * @param {string} name Name of repository
 */
function CommitHistoryAccordion({ name }) {
	// ! Use Dummy Data to save request limit to API
	// const data = useAxios(`${COMMIT_BASE_URL}/${name}/commits?page=1&per_page=5`);
	// * DUMMY DATA
	const data = commitData;
	console.log(data);

	const [commits, setCommits] = useState([]);

	useEffect(() => {
		function setCommitData() {
			setCommits(
				data.response.data.map((commit) => {
					console.log(commit);
					return {
						committerAvatar: commit.committer.avatar_url,
						committerName: commit.committer.login,
						message: commit.commit.message,
						sha: commit.sha,
						commitDate: commit.commit.committer.date,
					};
				})
			);
		}

		if (!data.isLoading && !data.error && commits.length === 0) {
			setCommitData();
		}
	}, [data]);

	if (data.isLoading) {
		return <Loader />;
	}

	return (
		<div className="Repo-Card__Commit-Toggle">
			<div id={`${name}-Commit-History`} className="Commit-History">
				<p className="mb-0">
					<button
						className="btn btn-link collapsed"
						data-toggle="collapse"
						data-target={`#collapse${name}`}
						aria-expanded="false"
						aria-controls={`collapse${name}`}>
						<History />
						Recent Commits
					</button>
				</p>
			</div>
			<div
				id={`collapse${name}`}
				className="collapse"
				aria-labelledby={`heading${name}`}
				data-parent="#accordion">
				<hr />
				{data.error ? (
					<ErrorMessage
						status={data.error.response.status}
						error={data.error.response.data.message}
					/>
				) : (
					<CommitList commits={commits} />
				)}
			</div>
		</div>
	);
}

CommitHistoryAccordion.propTypes = {
	name: PropTypes.string.isRequired,
};

export default CommitHistoryAccordion;
