/** Dependencies */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/** Components & Helpers */
import RepoList from '../repoList/RepoList';
import NoData from '../noData/NoData';

/** Styles */
import './Repositories.css';

/**
 * Home Page displaying list of organization's repositories sorted by star count.
 *
 * Repositories -> RepoList -> Commits -> CommitList
 *
 * @param {array}    repositories   Array of repositories.
 * @param {string}   organization   Name of Organization.
 */
function Repositories({ repositories, organization }) {
	const [sortedRepos, setSortedRepos] = useState([]);
	const [filter, setFilter] = useState('');

	const [currentPage, setCurrentPage] = useState(1);
	const [reposPerPage] = useState(10);

	useEffect(() => {
		/** Sorts Repos by stargazers_count */
		function sortRepos() {
			setSortedRepos(
				repositories.sort((repoA, repoB) => {
					if (repoA.stargazers_count < repoB.stargazers_count) {
						return 1;
					}
					if (repoA.stargazers_count > repoB.stargazers_count) {
						return -1;
					}
					return 0;
				})
			);
		}

		if (repositories.length > 0) {
			sortRepos();
		}
	}, [repositories]);

	let Body;

	// Get current repos
	const indexOfLastRepo = currentPage * reposPerPage;
	const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
	const currentRepos = sortedRepos.slice(indexOfFirstRepo, indexOfLastRepo);

	function paginate(e) {
		setCurrentPage(e);
	}

	// if user is using search bar, filter repositories by name
	if (filter !== '' && sortedRepos.length !== 0) {
		// filter repositories to display
		const filteredRepos = sortedRepos.filter(
			(repo) => repo.name.toLowerCase().indexOf(filter.toLowerCase()) > -1
		);

		// if no repository names match search, return NoData component
		Body =
			filteredRepos.length > 0 ? (
				<RepoList
					repositories={filteredRepos}
					organization={organization}
					perPage={reposPerPage}
					total={filteredRepos.length}
					paginate={paginate}
				/>
			) : (
				<NoData text={'repositories match'} />
			);
	} else if (sortedRepos.length !== 0) {
		Body = (
			<RepoList
				repositories={currentRepos}
				organization={organization}
				currentPage={currentPage}
				perPage={reposPerPage}
				total={sortedRepos.length}
				paginate={paginate}
			/>
		);
	} else {
		// if no data in sortedRepos
		Body = <NoData text={'repositories'} />;
	}

	return (
		<div className="Main-Body__Content">
			<div className="Search-Bar">
				<input
					id="filter"
					className="form-control"
					type="text"
					placeholder="Search repositories by name..."
					value={filter}
					onChange={(e) => setFilter(e.target.value)}
				/>
			</div>
			{Body}
		</div>
	);
}

Repositories.propTypes = {
	repositories: PropTypes.array,
};

export default Repositories;
