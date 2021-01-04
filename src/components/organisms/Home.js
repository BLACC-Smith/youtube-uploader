import React from 'react';
import styled from '@emotion/styled';
import Header from '../atoms/Header';

const Container = styled.div`
	width: 100vw;
	height: 100vh;
`;

const HomeUI = () => {
	return (
		<Container>
			<Header />
		</Container>
	);
};

const Home = () => {
	return <HomeUI />;
};

export default Home;
