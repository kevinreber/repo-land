import React from 'react';

/** Pagination for Commit List
 * Using pageNumbers as a reference to avoid exceeding API Limit
 */
function Pagination({ currentPage, paginate }) {
	const pageNumbers = [1, 2, 3];
	return (
		<ul className="pagination pagination-sm justify-content-center">
			{pageNumbers.map((number) => (
				<li className={`page-item ${currentPage === number ? 'disabled' : ''}`}>
					<a
						key={number}
						onClick={() => paginate(number)}
						className="page-link"
						href="!#">
						{number}
					</a>
				</li>
			))}
		</ul>
	);
}

export default Pagination;
