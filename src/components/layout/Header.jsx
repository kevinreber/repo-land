/** Dependencies */
import React from 'react';

/** Components */
import Brand from '../Brand';

/** Styles */
import './styles/Header.css';

function Header({ avatar, organization }) {
	return (
		<header className="Main-Header">
			<Brand />
			<h2 className="organization">{organization}</h2>
			<img src={avatar} alt="Logo" />
			{/* <form className="form-inline my-2 my-lg-0">
				<input
					className="form-control mr-sm-2"
					type="search"
					placeholder="Search"
					aria-label="Search"
				/>
				<button className="btn btn-outline-success my-2 my-sm-0" type="submit">
					Search
				</button>
			</form> */}
		</header>
	);
}

export default Header;
