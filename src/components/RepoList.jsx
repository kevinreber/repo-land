/** Dependencies */
import React from 'react';
import PropTypes from 'prop-types';

/** Components & Helpers */
import StarIcon from './icons/StarIcon';
import ForkIcon from './icons/ForkIcon';
import CommitHistoryAccordion from './CommitHistoryAccordion';
import convertDate from '../helpers/convertDate';

/** Styles */
import './styles/RepoList.css';

/**
 * Creates a List that displays data for each repository in repositories.
 *
 * Repositories -> RepoList
 *
 * @param {array} repositories Array of repositories
 */
function RepoList({ repositories }) {
	/** Create Card for each repository */
	const RepoCards = repositories.map((repo) => (
		<li key={repo.id} className="card Repo-Card">
			<div className="Repo-Card__Content">
				<div className="Repo-Card__Header">
					<h5 className="Repo-Card__Title">{repo.name}</h5>
					<p>{repo.description}</p>
				</div>
				<div className="Repo-Card__Footer">
					<div className="Repo-Card__Stats">
						<p>Language: {repo.language}</p>
						<p>Created: {convertDate(repo.created_at)}</p>
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
			</div>
			<CommitHistoryAccordion name={repo.name} />
		</li>
	));

	return (
		<>
			<ul id="accordion" className="Repo-List">
				{RepoCards}
			</ul>
		</>
	);
}

RepoList.propTypes = {
	repositories: PropTypes.array,
};

export default RepoList;
