/** Dependencies */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

/** Components & Helpers */
import RepoList from '../components/RepoList';
import Loader from '../components/Loader';

/** Hooks */
import useAxios from '../hooks/useAxios';

// TEMP - Dummy Data
import { repoData } from '../temp/data';

const REPO_BASE_URL = 'https://api.github.com/orgs/Netflix';

/**
 * Home Page displaying list of organization's repositories.
 */
function Repositories() {
	/* ! Use Dummy Data to save API calls */
	// const data = useAxios(`$BASE_URL/repos`);

	const data = repoData;
	const [repositories, setRepositories] = useState([]);

	useEffect(() => {
		function getRepoCommitData() {
			setRepositories(
				data.response.data.map((repo) => {
					return {
						name: repo.name,
						language: repo.language,
						description: repo.description,
						stargazers_count: repo.stargazers_count,
						forks_count: repo.forks_count,
						created_at: repo.created_at,
						// commitData: await axios.get(repo.commits_url),
					};
				})
			);
		}

		/** Sorts Repos by stargazers_count */
		function sortRepos() {
			setRepositories(
				repositories.sort((repoA, repoB) => {
					console.log(repoA.stargazers_count, repoB.stargazers_count);
					if (repoA.stargazers_count < repoB.stargazers_count) {
						return -1;
					}
					if (repoA.stargazers_count > repoB.stargazers_count) {
						return 1;
					}
					return 0;
				})
			);
		}

		if (!data.isLoading && !data.error && repositories.length === 0) {
			getRepoCommitData();
		}
		if (repositories.length > 0) {
			sortRepos();
		}
	}, [data, repositories]);

	if (data.isLoading) {
		return <Loader />;
	}
	if (data.error) {
		return <div>Sorry, something went wrong</div>;
	}

	return (
		<div className="Main-Body__Content">
			<RepoList repositories={repositories} />
		</div>
	);
}

export default Repositories;
