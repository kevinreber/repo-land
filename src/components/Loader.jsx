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
			<div class="spinner-border Loader" role="status">
				<span class="sr-only">Loading...</span>
			</div>
		</div>
	);
}

export default Loader;
