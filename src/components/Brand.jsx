/** Dependencies */
import React from 'react';

/** Components */
import GitIcon from './icons/GitIcon';

function Brand() {
	return (
		<div className="Brand">
			<GitIcon />
			<h5 className="Brand-Title device-xs">
				Repo
				<br />
				Land
			</h5>
			<h5 className="Brand-Title device-s">Repo Land</h5>
		</div>
	);
}

export default Brand;