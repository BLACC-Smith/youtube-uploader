import React, { useRef } from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
	padding: 24px;
	border: 1px solid;
	cursor: pointer;
	border-style: dashed;
	border-radius: 16px;
	width: 70%;
	height: 300px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	transition: all 0.3s;
	${({ hasVideo }) =>
		hasVideo
			? `
                background: #000;
                box-shadow: 0 20px 40px #c8c8c8;
                transform: translateY(-15px);
            `
			: 'background: #eeeeee'}
`;
const FileUpload = styled.input`
	display: none;
`;
const MessageContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Icon = styled.i`
	color: ${({ color }) => color};
	font-size: 24px;
`;
const Message = styled.p`
	color: ${({ color }) => color};
	font-size: 24px;
	font-weight: 400;
	margin-left: 12px;
	text-align: center;
`;

const VideoContainerUI = ({ video, setVideo }) => {
	const inputRef = useRef(null);

	return (
		<Container onClick={() => inputRef.current.click()} hasVideo={video}>
			<MessageContainer>
				<Icon className="material-icons" color={video ? '#fff' : '#525456'}>
					cloud_{video ? 'done' : 'upload'}
				</Icon>
				<Message color={video ? '#fff' : '#525456'}>
					{video ? video.name : 'Upload your video'}
				</Message>
			</MessageContainer>
			<FileUpload
				type="file"
				ref={inputRef}
				accept="video/*"
				onChange={({ target }) => {
					if (!target.files[0]?.type.startsWith('video')) return;
					setTimeout(() => setVideo(target.files[0]), 500);
				}}
			/>
		</Container>
	);
};
const VideoContainer = ({ video, setVideo }) => {
	return <VideoContainerUI video={video} setVideo={setVideo} />;
};

export default VideoContainer;
