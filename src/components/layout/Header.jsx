/** Dependencies */
import React from 'react';

/** Styles */
import './styles/Header.css';

function Header({ avatar }) {
	return (
		<header className="Main-Header">
			<h2 className="brand">
				<img src={avatar} alt="Logo" />
				Repositories
			</h2>
		</header>
	);
}

export default Header;
