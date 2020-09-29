/** Dependencies */
import React, { useState } from 'react';

/** Components */
import Arrow from './icons/Arrow';

/** Styles */
import './styles/ScrollTopArrow.css';

function ScrollTopArrow() {
	const [showScroll, setShowScroll] = useState(false);

	const checkScrollTop = () => {
		if (!showScroll && window.pageYOffset > 400) {
			setShowScroll(true);
		} else if (showScroll && window.pageYOffset <= 400) {
			setShowScroll(false);
		}
	};

	const scrollTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	window.addEventListener('scroll', checkScrollTop);

	return (
		<p
			className="scrollTop"
			onClick={scrollTop}
			style={{ height: 40, display: showScroll ? 'flex' : 'none' }}>
			<Arrow />
		</p>
	);
}

export default ScrollTopArrow;
