import React, { useState } from 'react';
import styled from '@emotion/styled';
import VideoContainer from '../atoms/VideoContainer';
import FormSubmission from '../molecules/FormSubmission';
import { uploadVideoToStorage } from '../../backend';

const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	justify-items: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
`;

const HomeUI = ({
	title,
	video,
	setTitle,
	setVideo,
	progress,
	chosenTags,
	description,
	setChosenTags,
	setDescription,
	uploadSubmission,
}) => {
	return (
		<>
			<Container>
				<VideoContainer video={video} setVideo={setVideo} />
				<FormSubmission
					title={title}
					setTitle={setTitle}
					progress={progress}
					chosenTags={chosenTags}
					description={description}
					onSubmit={uploadSubmission}
					setChosenTags={setChosenTags}
					setDescription={setDescription}
				/>
			</Container>
		</>
	);
};

const Home = () => {
	const [video, setVideo] = useState(null);
	const [title, setTitle] = useState('');
	const [progress, setProgress] = useState(0);
	const [description, setDescription] = useState('');
	const [chosenTags, setChosenTags] = useState([]);

	const clearData = () => {
		setVideo(null);
		setTitle('');
		setProgress(0);
		setDescription('');
		setChosenTags([]);
	};
	const uploadSubmission = () => {
		// handle error handling
		uploadVideoToStorage({
			video,
			title,
			description,
			chosenTags,
			updateProgress: setProgress,
			onComplete: clearData,
		});
	};
	return (
		<HomeUI
			title={title}
			video={video}
			setVideo={setVideo}
			setTitle={setTitle}
			progress={progress}
			chosenTags={chosenTags}
			description={description}
			uploadSubmission={uploadSubmission}
			setChosenTags={setChosenTags}
			setDescription={setDescription}
		/>
	);
};

export default Home;
