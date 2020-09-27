/** Dependencies */
import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

/** Components */
import StarIcon from './Icons/StarIcon';
import ForkIcon from './Icons/ForkIcon';

/** Styles */
import './styles/RepoList.css';

function RepoList({ repositories }) {
	const RepoCards = repositories.map((repo) => (
		<li className="Repo-Card">
			<h3 className="Repo-Title">{repo.name}</h3>
			<p>{repo.description}</p>
			<p>Language: {repo.language}</p>
			<p>Created: {moment(repo.created_at).calendar()}</p>
			<p>
				<StarIcon />
				{repo.stargazers_count}
			</p>
			<p>
				<ForkIcon />
				{repo.forks_count}
			</p>
		</li>
	));

	return (
		<div>
			<ul className="Repo-List">{RepoCards}</ul>
		</div>
	);
}

RepoList.propTypes = {
	repositories: PropTypes.array,
};

export default RepoList;
