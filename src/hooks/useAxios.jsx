/** Dependencies */
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

/** Custom hook that uses axios to GET data from url.
 *
 * @param {string} url URL link to GET data
 * @returns {Promise} Returns response from AJAX request.
 */
const useAxios = (url) => {
	const [response, setResponse] = useState(null);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	// after the first render, GET our data
	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get(url);
				setResponse(res);
			} catch (error) {
				setError(error);
			}
			setIsLoading(false);
		};
		fetchData();
	}, []);

	return { response, error, isLoading };
};

useAxios.propTypes = {
	url: PropTypes.string.isRequired,
};

export default useAxios;
