/** Dependencies */
import React from 'react';

/** Logo  */
import Logo from '../../images/netflix-logo.png';

/** Styles */
import './styles/Header.css';

function Header() {
	return (
		<header className="Main-Header">
			<h2 className="brand">
				<img src={Logo} alt="Logo" />
				etflix Repositories
			</h2>
		</header>
	);
}

export default Header;
