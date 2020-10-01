/** Dependencies */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

/** Components & Helpers */
import HistoryIcon from '../icons/HistoryIcon';
import CommitList from '../commitList/CommitList';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Loader from '../loader/Loader';

/** Styles */
import './Commits.css';

// * TEMP - Placeholder Data
import { commitData } from '../../temp/data';

const COMMIT_BASE_URL = 'https://api.github.com/repos';

/**
 * Accordion component of Repo Card that displays the most recent 6 commits.
 * ! To avoid going over request limit, request is only calling for last 6 recent commits.
 * ! Number of commits requested can be changed using the `perPage` variable
 *
 * Repositories -> RepoList -> Commits -> CommitList
 *
 * @param {string} name Name of repository.
 * @param {string} organization Name of Organization.
 */
function Commits({ name, organization }) {
	// Limits how many commits are requested
	const perPage = 6;

	const [commits, setCommits] = useState([]);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	const [currentPage, setCurrentPage] = useState(1);
	const [commitsPerPage] = useState(3);

	useEffect(() => {
		const fetchData = async () => {
			// Reset all state
			setCommits([]);
			setError(null);
			setIsLoading(true);
			try {
				// ! COMMENT OUT LINES BELOW IF USING PLACEHOLDER DATA
				// const resp = await axios.get(
				// 	`${COMMIT_BASE_URL}/${organization}/${name}/commits?page=1&per_page=${perPage}`
				// );
				// setCommits(resp);

				// * USE PLACEHOLDER DATA BELOW
				setCommits(commitData.response);
			} catch (error) {
				setError(error);
			}
			setIsLoading(false);
		};

		fetchData();
	}, []);

	if (isLoading) {
		return <Loader />;
	}

	// Get current commits to pass into pagination
	const indexOfLastCommit = currentPage * commitsPerPage;
	const indexOfFirstCommit = indexOfLastCommit - commitsPerPage;
	let currentCommits;

	if (!isLoading && !error && commits.data.length > 0) {
		currentCommits = commits.data.slice(indexOfFirstCommit, indexOfLastCommit);
	}

	const paginate = (e) => setCurrentPage(e);

	return (
		<div className="Repo-Card__Commit-Toggle">
			<div id={`${name}-Commit-History`} className="Commit-History">
				<button
					className="btn btn-link collapsed"
					data-toggle="collapse"
					data-target={`#collapse${name}`}
					aria-expanded="false"
					aria-controls={`collapse${name}`}
					data-testid="commit-list-toggle">
					<HistoryIcon />
					Recent Commits
				</button>
			</div>
			<div
				id={`collapse${name}`}
				className="collapse"
				aria-labelledby={`heading${name}`}
				data-parent="#accordion"
				data-testid="commit-list-container">
				<hr />
				{error ? (
					<ErrorMessage
						status={error.response.status}
						error={error.response.data.message}
					/>
				) : (
					<CommitList
						currentPage={currentPage}
						perPage={commitsPerPage}
						total={commits.data.length}
						commits={currentCommits}
						paginate={paginate}
					/>
				)}
			</div>
		</div>
	);
}

Commits.propTypes = {
	name: PropTypes.string.isRequired,
};

export default Commits;
