/** Dependencies */
import React from 'react';

/** Components */
import Brand from '../Brand';
import NewOrganizationForm from '../NewOrganizationForm';

/** Styles */
import './styles/Header.css';

function Header({ avatar, organization, search, setSearch, searchForOrg }) {
	return (
		<header className="Main-Header">
			<Brand />
			<div className="Main-Header__Center">
				<img src={avatar} alt="Logo" />
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
