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
			<div className="Repo-Card__Header">
				<h3 className="Repo-Card__Title">{repo.name}</h3>
				<p>{repo.description}</p>
			</div>
			<div className="Repo-Card__Footer">
				<div className="Repo-Card__Stats">
					<p>Language: {repo.language}</p>
					<p>Created: {moment(repo.created_at).calendar()}</p>
				</div>
				<div className="Repo-Card__Icons">
					<div className="Repo-Card__Stars">
						<StarIcon />
						<p>{repo.stargazers_count}</p>
					</div>
					<div className="Repo-Card__Forks">
						<ForkIcon />
						<p>{repo.forks_count}</p>
					</div>
				</div>
			</div>
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
