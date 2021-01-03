import React, { useState } from 'react';
import styled from '@emotion/styled';
import VideoContainer from '../atoms/VideoContainer';
import FormSubmission from '../molecules/FormSubmission';

const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	justify-items: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
`;

const HomeUI = () => {
	const [video, setVideo] = useState(null);
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [chosenTags, setChosenTags] = useState([]);

	const uploadSubmission = () => {
		console.log({ video, title, description, chosenTags });
	};
	return (
		<>
			<Container>
				<VideoContainer video={video} setVideo={setVideo} />
				<FormSubmission
					setTitle={setTitle}
					setDescription={setDescription}
					chosenTags={chosenTags}
					setChosenTags={setChosenTags}
					onSubmit={uploadSubmission}
				/>
			</Container>
		</>
	);
};

const Home = () => {
	return <HomeUI />;
};

export default Home;
