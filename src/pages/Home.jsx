/** Dependencies */
import React from 'react';

/** Components */

/** Hooks */
import useAxios from '../hooks/useAxios';

const BASE_URL = 'https://api.github.com/orgs/Netflix/repos';

function Home() {
	const data = useAxios(BASE_URL);
	if (data.isLoading) {
		return <div>Loading...</div>;
	}
	if (data.error) {
		return <div>Sorry, something went wrong</div>;
	}
	let Body;

	console.log(data.response.data);
	const { status } = data.response;

	if (data.response.data) {
		Body = data.response.data.map((el) => (
			<p>
				{el.id}, {el.description}
			</p>
		));
	}

	return (
		<div>
			<h1>hello world</h1>
			<div>
				<h3>{status}</h3>
				{Body}
			</div>
		</div>
	);
}

export default Home;
