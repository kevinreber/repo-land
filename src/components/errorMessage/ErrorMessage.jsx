import React from 'react';

function ErrorMessage({ status, error, variant }) {
	return (
		<div className={`error ${variant === 'repo' ? 'repo' : ''}`}>
			<p>Error {status}</p>
			<p>Sorry, something went wrong</p>
			<p>{error}</p>
		</div>
	);
}

export default ErrorMessage;
