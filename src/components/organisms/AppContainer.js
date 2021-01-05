import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../../backend/config';
import { AuthContext } from '../../context/AuthContext';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import Login from './Login';
import Home from './Home';

const PrivateRoute = ({ children, loggedIn, ...rest }) => {
	return (
		<Route
			{...rest}
			render={({ location }) =>
				loggedIn ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/login',
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
};

export default function AppContainer() {
	const [loading, setLoading] = useState(false);
	const { user, updateUser } = useContext(AuthContext);

	useEffect(() => {
		setLoading(true);
		auth.onAuthStateChanged((user) => {
			updateUser(user);
			setLoading(false);
		});
	}, [updateUser]);

	return (
		<Router>
			<>
				{loading ? (
					<p>Loading...</p>
				) : (
					<Switch>
						<Route path="/login">
							<Login />
						</Route>
						<PrivateRoute loggedIn={user} path="/">
							<Home />
						</PrivateRoute>
					</Switch>
				)}
			</>
		</Router>
	);
}
