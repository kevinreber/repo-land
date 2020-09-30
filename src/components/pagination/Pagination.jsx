import React from 'react';

/** Pagination List
 *
 * @param {number}    currentPage	  Current Page number in pagination.
 * @param {number}    perPage		  Number of elements to display per page in pagination.
 * @param {number}    total           Total number of elements in repositories array.
 * @param {function}  paginate        Sets state of current page in pagination.
 */
function Pagination({ currentPage, perPage, total, paginate }) {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(total / perPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<ul className="pagination pagination-sm justify-content-center">
			{pageNumbers.map((number) => (
				<li
					key={number}
					className={`page-item ${currentPage === number ? 'disabled' : ''}`}>
					<p onClick={() => paginate(number)} className="page-link">
						{number}
					</p>
				</li>
			))}
		</ul>
	);
}

export default Pagination;
