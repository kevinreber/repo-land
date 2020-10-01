/** Dependencies */
import React from 'react';
import PropTypes from 'prop-types';

/** Components & Helpers */
import StarIcon from '../icons/StarIcon';
import ForkIcon from '../icons/ForkIcon';
import Commits from '../commits/Commits';
import Pagination from '../pagination/Pagination';
import convertDate from '../../helpers/convertDate';

/** Styles */
import './RepoList.css';

/**
 * Creates a List that displays data for each repository in repositories.
 *
 * Repositories -> RepoList -> Commits -> CommitList
 *
 * @param {array}     repositories    Array of repositories.
 * @param {string}    organization    Name of Organization.
 * @param {number}    currentPage	  Current Page number in pagination.
 * @param {number}    perPage		  Number of elements to display per page in pagination.
 * @param {number}    total           Total number of elements in repositories array.
 * @param {function}  paginate        Sets state of current page in pagination.
 */
function RepoList({
	repositories,
	organization,
	currentPage,
	perPage,
	total,
	paginate,
}) {
	/** Create Card for each repository */
	const RepoCards = repositories.map((repo) => (
		<li key={repo.id} className="card Repo-Card">
			<div className="Repo-Card__Content">
				<div className="Repo-Card__Header">
					<h5 className="Repo-Card__Title">{repo.name}</h5>
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
				<div className="Repo-Card__Body">
					<p>{repo.description}</p>
				</div>
				<div className="Repo-Card__Footer">
					<p>Language: {repo.language}</p>
					<p>Created: {convertDate(repo.created_at)}</p>
				</div>
			</div>
			<Commits name={repo.name} organization={organization} />
		</li>
	));

	return (
		<>
			<ul id="accordion" className="Repo-List">
				{RepoCards}
			</ul>
			<Pagination
				currentPage={currentPage}
				perPage={perPage}
				total={total}
				paginate={paginate}
			/>
		</>
	);
}

RepoList.propTypes = {
	repositories: PropTypes.array,
};

export default RepoList;
