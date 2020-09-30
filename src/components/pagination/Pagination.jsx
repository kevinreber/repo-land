import React from 'react';

function Pagination({ paginate }) {
	return (
		<ul className="pagination pagination-sm justify-content-center">
			<li className="page-item disabled">
				<a onClick={paginate} className="page-link" href="!#" tabindex="-1">
					1
				</a>
			</li>
			<li className="page-item">
				<a onClick={paginate} className="page-link" href="!#">
					2
				</a>
			</li>
			<li className="page-item">
				<a onClick={paginate} className="page-link" href="!#">
					3
				</a>
			</li>
		</ul>
	);
}

export default Pagination;
