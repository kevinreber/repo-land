/** Dependencies */
import React from 'react';

/** Styles */
import './styles/Loader.css';

/**
 * Loader Component to display when status 'isLoading'
 */
function Loader() {
	return (
		<div className="Loader-Wrapper">
			<div className="spinner-border Loader" role="status">
				<span className="sr-only">Loading...</span>
			</div>
		</div>
	);
}

export default Loader;
