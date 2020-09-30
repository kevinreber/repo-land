/** Dependencies */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/** Components & Helpers */
import HistoryIcon from '../icons/HistoryIcon';
import CommitList from './CommitList';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Loader from '../loader/Loader';

/** Hooks */
import useAxios from '../../hooks/useAxios';

/** Styles */
import './CommitHistoryButton.css';

// TEMP - Dummy Data
import { commitData } from '../../temp/data';

const COMMIT_BASE_URL = 'https://api.github.com/repos';
const DEFAULT_AVATAR = 'https://github.com/identicons/jasonlong.png';

/**
 * Accordion component of Repo Card that displays the most recent 9 commits.
 *
 * Repositories -> RepoList -> CommitHistoryAccordion -> CommitList
 *
 * @param {string} name Name of repository.
 * @param {string} organization Name of Organization.
 */
function CommitHistoryAccordion({ name, organization }) {
	// ! Use Dummy Data to limit requests to API
	// ! COMMENT OUT LINE BELOW IF USING DUMMY DATA
	// const data = useAxios(
	// 	// `${COMMIT_BASE_URL}/${organization}/${name}/commits?page=3&per_page=3`
	// );
	// * DUMMY DATA
	const data = commitData;
	// console.log(data);

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
						<HistoryIcon />
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
