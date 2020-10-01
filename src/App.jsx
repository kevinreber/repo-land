/** Dependencies */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

/** Components & Routes */
import Repositories from './components/repositories/Repositories';
import Header from './components/header/Header';
import Loader from './components/loader/Loader';
import ErrorMessage from './components/errorMessage/ErrorMessage';
import ScrollTopArrow from './components/scrollTopArrow/ScrollTopArrow';

// TEMP - Placeholder Data
import { repoData } from './temp/data';

/** Styles */
import './App.css';

const REPO_BASE_URL = 'https://api.github.com/orgs';

/**
 * App -> Repositories -> RepoList -> Commits -> CommitList
 */
function App() {
	const [organization, setOrganization] = useState('Netflix');

	const [repositories, setRepositories] = useState(null);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	const [ownerAvatar, setOwnerAvatar] = useState('');
	const [search, setSearch] = useState('');

	/** Listens when state of organization changes and fetches that organizations data */
	useEffect(() => {
		const fetchData = async () => {
			// Reset all state
			resetState();
			try {
				// ! COMMENT OUT LINES BELOW IF USING PLACEHOLDER DATA
				const resp = await axios.get(`${REPO_BASE_URL}/${organization}/repos`);
				setRepositories(resp);

				// get owner's avatar to display in Header component
				setOwnerAvatar(resp.data[0].owner.avatar_url);

				// * USE PLACEHOLDER DATA BELOW
				// setRepositories(repoData.response);
				// setOwnerAvatar(repoData.response.data[0].owner.avatar_url);
			} catch (error) {
				setError(error);
			}
			setIsLoading(false);
		};
		if (organization) {
			fetchData();
		}
	}, [organization]);

	const resetState = () => {
		setRepositories([]);
		setError(null);
		setIsLoading(true);
		setSearch('');
		setOwnerAvatar('');
	};

	/** Changes state of organization, which will trigger the event listener
	 * to fetch the organizations data
	 *
	 * @param {string} org Name of organization
	 */
	const searchForOrganization = (org) => setOrganization(org);

	if (isLoading) {
		return <Loader />;
	}

	return (
		<div className="App">
			<Header
				avatar={ownerAvatar}
				organization={organization}
				search={search}
				setSearch={setSearch}
				searchForOrg={searchForOrganization}
			/>
			<ScrollTopArrow />
			<main className="Main-Body">
				{error ? (
					<ErrorMessage
						status={error.response.status}
						error={error.response.data.message}
						variant={'repo'}
					/>
				) : (
					<Repositories
						repositories={repositories.data}
						organization={organization}
					/>
				)}
			</main>
		</div>
	);
}

export default App;
