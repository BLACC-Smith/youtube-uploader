import React, { useState } from 'react';
import styled from '@emotion/styled';
import VideoContainer from '../atoms/VideoContainer';
import FormSubmission from '../molecules/FormSubmission';
import { uploadVideoToStorage } from '../../backend';
import ErrorMessage from '../atoms/ErrorMessage';

const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	justify-items: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
	position: relative;
`;

const HomeUI = ({
	error,
	title,
	video,
	setTitle,
	username,
	setUsername,
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
				<ErrorMessage error={error} />
				<VideoContainer video={video} setVideo={setVideo} />
				<FormSubmission
					title={title}
					setTitle={setTitle}
					username={username}
					setUsername={setUsername}
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
	const [username, setUsername] = useState('');
	const [title, setTitle] = useState('');
	const [error, setError] = useState('');
	const [progress, setProgress] = useState(0);
	const [description, setDescription] = useState('');
	const [chosenTags, setChosenTags] = useState([]);

	const clearData = () => {
		setVideo(null);
		setTitle('');
		setUsername('');
		setProgress(0);
		setDescription('');
		setChosenTags([]);
	};
	const validateInputs = () => {
		if (!chosenTags.length) setError('You must add at least one tag');
		if (!description) setError('You must add a description for the video');
		if (!title) setError('You must add a video title');
		if (!username) setError('You must add your Discord username');
		if (!video) setError('You must upload a video');
		setTimeout(() => setError(''), 5000);
		return video && username && title && description && chosenTags.length;
	};
	const uploadSubmission = () => {
		if (validateInputs()) {
			uploadVideoToStorage({
				video,
				username,
				title,
				description,
				chosenTags,
				updateProgress: setProgress,
				onComplete: clearData,
			});
		}
	};
	return (
		<HomeUI
			title={title}
			setTitle={setTitle}
			username={username}
			setUsername={setUsername}
			video={video}
			setVideo={setVideo}
			progress={progress}
			chosenTags={chosenTags}
			description={description}
			uploadSubmission={uploadSubmission}
			setChosenTags={setChosenTags}
			error={error}
			setDescription={setDescription}
		/>
	);
};

export default Home;
