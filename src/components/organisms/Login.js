import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { auth, provider } from '../../backend/config';
import { AuthContext } from '../../context/AuthContext';

export default function Login() {
	let history = useHistory();
	const { user } = useContext(AuthContext);

	useEffect(() => {
		user && history.replace('/');
	}, [user, history]);

	const signInWithGoogle = () => {
		auth.signInWithPopup(provider);
	};
	return (
		<>
			<button onClick={signInWithGoogle}>
				<i className="material-icons">face</i>
				Login with Google
			</button>
		</>
	);
}
