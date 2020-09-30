/** Dependencies */
import React from 'react';

/** Components */
import Brand from './Brand';
import NewOrganizationForm from './NewOrganizationForm';

/** Styles */
import './Header.css';

/** Header Component.
 *
 * @param {string}    avatar         URL of organizations avatar.
 * @param {string}    organization   Name of organization.
 * @param {string}    search         State value of search search bar
 * @param {function}  setSearch      Changes state search
 * @param {function}  searchForOrg   Callback that changes state of organization
 */
function Header({
	avatar = null,
	organization,
	search,
	setSearch,
	searchForOrg,
}) {
	return (
		<header className="Main-Header">
			<Brand />
			<div className="Main-Header__Center">
				{avatar ? <img src={avatar} alt="Logo" /> : ''}
				<h2 className="organization">{organization}</h2>
			</div>
			<NewOrganizationForm
				value={search}
				setValue={setSearch}
				searchForOrg={searchForOrg}
			/>
		</header>
	);
}

export default Header;
