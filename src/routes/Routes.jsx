/** Dependencies */
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

/** Component Pages */
import Home from '../pages/Home';

function Routes() {
	return (
		<>
			<Switch>
				<Route exact path="/" component={Home} />
				<Redirect to="/" />
			</Switch>
		</>
	);
}

export default Routes;
