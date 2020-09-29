import React from 'react';

/**
 * Form in header used to search for other organizations
 *
 */
function NewOrganizationForm({ value, setValue, searchForOrg }) {
	function validateData(val) {
		if (val === '' || val.trim() === '') {
			return false;
		}
		return true;
	}

	function search(e) {
		e.preventDefault();
		if (validateData(value)) {
			searchForOrg(value);
		}
	}

	return (
		<>
			<form className="form-inline my-lg-0 Organization-Form" onSubmit={search}>
				<input
					type="text"
					class="form-control"
					placeholder="Search Organizations..."
					value={value}
					onChange={(e) => setValue(e.target.value)}
					required
				/>
				<div class="input-group-append">
					<button class="btn btn-outline-secondary" type="submit">
						Search
					</button>
				</div>
			</form>
		</>
	);
}

export default NewOrganizationForm;
