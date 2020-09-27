/** Dependencies */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

/** Components */
import RepoList from '../components/RepoList';
import Loader from '../components/Loader';

/** Hooks */
import useAxios from '../hooks/useAxios';

const BASE_URL = 'https://api.github.com/orgs/Netflix/repos';

// Dummy Data
const data = {
	isLoading: false,
	error: null,
	response: {
		status: 200,
		data: [
			{
				name: 'astyanax',
				language: 'Java',
				description: 'Cassandra Java Client',
				stargazers_count: 1010,
				forks_count: 366,
				created_at: '2011-07-13T20:24:30Z',
			},
			{
				name: 'curator',
				language: 'Java',
				description: 'ZooKeeper client wrapper and rich ZooKeeper framework',
				stargazers_count: 2092,
				forks_count: 434,
				created_at: '2011-07-14T19:47:55Z',
			},
			{
				name: 'Priam',
				language: 'Java',
				description:
					'Co-Process for backup/recovery, Token Management, and Centralized Configuration management for Cassandra.',
				stargazers_count: 980,
				forks_count: 276,
				created_at: '2011-07-20T17:51:25Z',
			},
		],
	},
};

function Home() {
	/* ! Use Dummy Data to save API calls */
	// const data = useAxios(BASE_URL);
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
		if (repositories.length !== 0) {
			sortRepos();
		}
	}, [data, repositories]);

	if (data.isLoading) {
		return <Loader />;
	}
	if (data.error) {
		return <div>Sorry, something went wrong</div>;
	}

	/** Nested
	 * make AJAX request using 'commits_url'*/
	// commit.message
	// commit.committer.name
	// sha
	// commit.committer.date

	// ○ Commit Title
	// ○ Committer username
	// ○ Commit hash
	// ○ Date

	return (
		<div className="Main-Body__Content">
			<RepoList repositories={repositories} />
		</div>
	);
}

export default Home;
