/** Dependencies */
import React, { useState, useEffect } from 'react';

/** Components & Routes */
import Repositories from './pages/Repositories';
import Header from './components/layout/Header';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';

/** Hooks */
import useAxios from './hooks/useAxios';

// TEMP - Dummy Data
import { repoData } from './temp/data';

/** Styles */
import './App.css';

const REPO_BASE_URL = 'https://api.github.com/orgs/Netflix';

function App() {
	// ! Use Dummy Data to save request limit to API
	// const data = useAxios(`${REPO_BASE_URL}/repos`);
	// * DUMMY DATA
	const data = repoData;
	console.log(data);

	const [repositories, setRepositories] = useState([]);
	const [ownerAvatar, setOwnerAvatar] = useState(null);

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
						owner_avatar_url: repo.owner.avatar_url,
						// commitData: await axios.get(repo.commits_url),
					};
				})
			);
		}

		if (!data.isLoading && !data.error && repositories.length === 0) {
			getRepoCommitData();
		}

		if (repositories.length > 0) {
			setOwnerAvatar(repositories[0].owner_avatar_url);
		}
	}, [data, repositories]);

	if (data.isLoading) {
		return <Loader />;
	}

	return (
		<div className="App">
			<Header avatar={ownerAvatar} />
			<main className="Main-Body">
				{data.error ? (
					<ErrorMessage
						status={data.error.response.status}
						error={data.error.response.data.message}
					/>
				) : (
					<Repositories repositories={repositories} />
				)}
			</main>
		</div>
	);
}

export default App;
