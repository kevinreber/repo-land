/** Dependencies */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/** Components & Helpers */
import RepoList from '../components/RepoList';
import NoData from '../components/NoData';

/** Styles */
import './styles/Repositories.css';

/**
 * Home Page displaying list of organization's repositories sorted by star count.
 */
function Repositories({ repositories }) {
	const [sortedRepos, setSortedRepos] = useState([]);
	const [filter, setFilter] = useState('');

	useEffect(() => {
		/** Sorts Repos by stargazers_count */
		function sortRepos() {
			setSortedRepos(
				repositories.sort((repoA, repoB) => {
					console.log(repoA.stargazers_count, repoB.stargazers_count);
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

	if (filter !== '' && sortedRepos.length !== 0) {
		// filter repositories to display
		const filteredRepos = sortedRepos.filter(
			(repo) => repo.name.toLowerCase().indexOf(filter.toLowerCase()) > -1
		);

		Body =
			filteredRepos.length > 0 ? (
				<RepoList repositories={filteredRepos} />
			) : (
				<NoData text={'repositories match'} />
			);
	} else if (sortedRepos && sortedRepos.length !== 0) {
		Body = <RepoList repositories={sortedRepos} />;
	} else {
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
			{/* <RepoList repositories={sortedRepos} /> */}
		</div>
	);
}

Repositories.propTypes = {
	repositories: PropTypes.array,
};

export default Repositories;
