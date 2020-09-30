/** Dependencies */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

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
	const INITIAL_STATE = commitData;

	// // ! COMMENT OUT LINE BELOW IF USING DUMMY DATA
	// const INITIAL_STATE = {
	// 	response: null,
	// 	error: null,
	// 	isLoading: true,
	// };

	const [data, setData] = useState(INITIAL_STATE);

	const [currentPage, setCurrentPage] = useState(1);
	const [commitsPerPage] = useState(3);

	useEffect(() => {
		const fetchData = async () => {
			// Reset all state
			setData(INITIAL_STATE);
			try {
				// ! COMMENT OUT LINES BELOW IF USING DUMMY DATA
				// const res = await axios.get(
				// 	// `${COMMIT_BASE_URL}/${organization}/${name}/commits?page=1&per_page=9`
				// 	`${COMMIT_BASE_URL}/${organization}/curator/commits?page=1&per_page=4`
				// );
				// setData((data) => ({
				// 	...data,
				// 	response: res,
				// }));
			} catch (error) {
				setData((data) => ({
					...data,
					error,
				}));
			}
			setData((data) => ({
				...data,
				isLoading: false,
			}));
		};

		fetchData();
	}, []);

	if (data.isLoading) {
		return <Loader />;
	}

	// Get current commits
	const indexOfLastCommit = currentPage * commitsPerPage;
	const indexOfFirstCommit = indexOfLastCommit - commitsPerPage;
	let currentCommits;

	if (!data.isLoading) {
		currentCommits = data.response.data.slice(
			indexOfFirstCommit,
			indexOfLastCommit
		);
	}

	function paginate(e) {
		setCurrentPage(e);
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
					<CommitList
						currentPage={currentPage}
						perPage={commitsPerPage}
						total={data.response.data.length}
						commits={currentCommits}
						paginate={paginate}
					/>
				)}
			</div>
		</div>
	);
}

CommitHistoryAccordion.propTypes = {
	name: PropTypes.string.isRequired,
};

export default CommitHistoryAccordion;
