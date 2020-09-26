/** Dependencies */
import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

function RepoList({ repositories }) {
	const RepoCards = repositories.map((repo) => (
		<li className="Repo-Card">
			<h3>{repo.name}</h3>
			<p>{repo.language}</p>
			<p>{repo.description}</p>
			<p>{repo.stargazers_count}</p>
			<p>{repo.forks_count}</p>
			<p>{moment(repo.created_at).calendar()}</p>
		</li>
	));

	return (
		<div>
			<ul>{RepoCards}</ul>
		</div>
	);
}

RepoList.propTypes = {
	repositories: PropTypes.array,
};

export default RepoList;
