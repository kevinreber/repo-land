/** Dependencies */
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

/** Component Pages */
import Repositories from '../pages/Repositories';

function Routes() {
	return (
		<>
			<Switch>
				<Route exact path="/" component={Repositories} />
				<Redirect to="/" />
			</Switch>
		</>
	);
}

export default Routes;
