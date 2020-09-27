import React from 'react';
import './styles/Loader.css';

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
