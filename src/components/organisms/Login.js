import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { auth, provider } from '../../backend/config';
import { AuthContext } from '../../context/AuthContext';
import styled from '@emotion/styled';
import logo from '../../res/blacc.png';

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Logo = styled.img`
	width: 150px;
	height: auto;
	object-fit: cover;
	border-radius: 50%;
	margin-bottom: 50px;
`;

const CTA = styled.p`
	padding: 12px 24px;
	background: #000;
	color: #fff;
	font-size: 24px;
	cursor: pointer;
	border-radius: 16px;
	box-shadow: 0 10px 20px #c8c8c8;
`;

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
		<Container>
			<Logo src={logo} />
			<CTA onClick={signInWithGoogle}>SIGN IN</CTA>
		</Container>
	);
}
