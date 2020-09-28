/** Dependencies */
import React, { useState, useEffect } from 'react';

/** Components & Helpers */
import RepoList from '../components/RepoList';

/**
 * Home Page displaying list of organization's repositories sorted by star count.
 */
function Repositories({ repositories }) {
	const [sortedRepos, setSortedRepos] = useState([]);

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

	return (
		<div className="Main-Body__Content">
			<RepoList repositories={sortedRepos} />
		</div>
	);
}

export default Repositories;
