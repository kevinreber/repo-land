import React from 'react';

function ErrorMessage({ status, error }) {
	return (
		<div className="error">
			<p>Error {status}</p>
			<p>Sorry, something went wrong</p>
			<p>{error}</p>
		</div>
	);
}

export default ErrorMessage;
