/** Dependencies */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

/** Components & Routes */
import Repositories from './pages/Repositories';
import Header from './components/header/Header';
import Loader from './components/loader/Loader';
import ErrorMessage from './components/errorMessage/ErrorMessage';
import ScrollTopArrow from './components/scrollTopArrow/ScrollTopArrow';

// TEMP - Dummy Data
import { repoData } from './temp/data';

/** Styles */
import './App.css';

const REPO_BASE_URL = 'https://api.github.com/orgs';

function App() {
	const [organization, setOrganization] = useState('Netflix');

	// ! Use Dummy Data to limit requests to API
	// * DUMMY DATA BELOW
	const INITIAL_STATE = repoData;

	// ! COMMENT OUT LINE BELOW IF USING DUMMY DATA
	// const INITIAL_STATE = {
	// 	response: null,
	// 	error: null,
	// 	isLoading: true,
	// };

	const [data, setData] = useState(INITIAL_STATE);
	const [ownerAvatar, setOwnerAvatar] = useState('');
	const [search, setSearch] = useState('');

	/** Listens when state of organization changes and fetches that organizations data */
	useEffect(() => {
		const fetchData = async () => {
			// Reset all state
			setData(INITIAL_STATE);
			setSearch('');
			setOwnerAvatar('');
			try {
				// ! COMMENT OUT LINES BELOW IF USING DUMMY DATA
				// const res = await axios.get(`${REPO_BASE_URL}/${organization}/repos`);
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
		if (organization) {
			fetchData();
		}
	}, [organization]);

	/** If no errors, get owner's avatar */
	useEffect(() => {
		// get owner's avatar to display in Header component
		if (!data.isLoading && !data.error && data.response.data.length > 0) {
			setOwnerAvatar(data.response.data[0].owner.avatar_url);
		}
	}, [data]);

	/** Changes state of organization, which will trigger the event listener
	 * to fetch the organizations data
	 *
	 * @param {string} org Name of organization
	 */
	const searchForOrganization = (org) => {
		setOrganization(org);
	};

	if (data.isLoading) {
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
				{data.error ? (
					<ErrorMessage
						status={data.error.response.status}
						error={data.error.response.data.message}
					/>
				) : (
					<Repositories
						repositories={data.response.data}
						organization={organization}
					/>
				)}
			</main>
		</div>
	);
}

export default App;
