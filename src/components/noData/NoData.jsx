/** Dependencies */
import React from 'react';
import PropTypes from 'prop-types';

/** Styles */
import './NoData.css';

/**
 * Component that let's user know that no data/matches exists.
 *
 * @param {string} text
 */
function NoData({ text }) {
	return <p className="font-italic p-3 No-Data">No {text}</p>;
}

NoData.propTypes = {
	text: PropTypes.string.isRequired,
};

export default NoData;
