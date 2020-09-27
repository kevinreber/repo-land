/** Dependencies */
import React from 'react';

/** Components & Routes */
import Header from './components/layout/Header';
import Routes from './routes/Routes';

/** Styles */
import './App.css';

function App() {
	return (
		<div className="App">
			<Header />
			<div className="Main-Body">
				<Routes />
			</div>
		</div>
	);
}

export default App;
