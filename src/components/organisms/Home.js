import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
`;

const HomeUI = () => {
	return <Container>hi</Container>;
};

const Home = () => {
	return <HomeUI />;
};

export default Home;
