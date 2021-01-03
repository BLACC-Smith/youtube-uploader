import React from 'react';
import styled from '@emotion/styled';
import VideoContainer from '../atoms/VideoContainer';

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
`;

const HomeUI = () => {
	return (
		<Container>
			<VideoContainer />
		</Container>
	);
};

const Home = () => {
	return <HomeUI />;
};

export default Home;
