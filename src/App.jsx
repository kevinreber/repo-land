/** Dependencies */
import React from 'react';

/** Components & Routes */
import Header from './components/layout/Header';
import Repositories from './pages/Repositories';

/** Styles */
import './App.css';

function App() {
	return (
		<div className="App">
			<Header />
			<main className="Main-Body">
				<Repositories />
			</main>
		</div>
	);
}

export default App;
