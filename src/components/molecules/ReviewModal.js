import React from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import { auth } from '../../backend/config';

const Overlay = styled.div`
	width: 100%;
	height: 100%;
	z-index: ${({ show }) => (show ? 10 : -1)};
	opacity: ${({ show }) => (show ? 1 : 0)};
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.3s;
	background: ${({ show }) => (show ? 'rgba(0, 0, 0, 0.6)' : 'transparent')};
`;
const Card = styled.div`
	background: #fff;
	border-radius: 26px;
	box-shadow: 0 20px 40px #505050;
	max-height: 75%;
	width: 50%;
	overflow-y: scroll;
	max-width: 650px;
	padding: 24px 24px 0 24px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	transition: all 0.15s ease-in-out;
	transform: ${({ show }) => (show ? 'scale(1)' : 'scale(0)')};
`;
const Video = styled.video`
	border-radius: 16px;
	object-fit: cover;
	width: 100% !important;
	height: auto !important;
`;
const Title = styled.p`
	margin-top: 16px;
	font-weight: 700;
	color: #212121;
	width: 100%;
	font-size: 32px;
`;
const Description = styled.p`
	margin: 16px 0;
	font-weight: 400;
	color: #525456;
	font-size: 18px;
	max-height: 100px;
	width: 100%;
	overflow-y: scroll;
`;
const TagsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
	overflow-y: scroll;
`;
const Tag = styled.p`
	padding: 12px 16px;
	font-size: 12px;
	cursor: pointer;
	border-radius: 30px;
	margin-bottom: 6px;
	margin-right: 8px;
	background: #000;
	color: #fff;
`;

const Footer = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	background: linear-gradient(transparent, #fff);
	position: sticky;
	z-index: 20;
	bottom: 0;
	padding: 12px 0;
`;

const CTA = styled.p`
	padding: 16px;
	background: ${({ bg }) => bg};
	color: ${({ color }) => color};
	font-size: 16px;
	font-weight: 500;
	cursor: pointer;
	border-radius: 50px;
`;
const MetadataContainer = styled.div`
	padding-bottom: 51;
	z-index: 15;
`;

const ReviewModalUI = ({ data, onClose, publish }) => {
	return (
		<Overlay
			show={data}
			onClick={({ target }) => target.childElementCount === 1 && onClose()}
		>
			<Card show={data}>
				<MetadataContainer>
					<Video width="100%" controls src={data.video} />
					<Title>{data.title}</Title>
					<Description>{data.description}</Description>
					<TagsContainer>
						{data.tags.map((el, idx) => (
							<Tag key={idx}>{el}</Tag>
						))}
					</TagsContainer>
				</MetadataContainer>
				<Footer>
					<CTA color="#000" bg="#fff" onClick={onClose}>
						CANCEL
					</CTA>
					<CTA color="#fff" bg="#000" onClick={publish}>
						PUBLISH
					</CTA>
				</Footer>
			</Card>
		</Overlay>
	);
};

const ReviewModal = ({ data, onClose }) => {
	const publishToYoutube = async () => {
		const token = await auth.currentUser.getIdToken();
		console.log({ token });
		try {
			const { res } = await axios.post(
				`https://www.googleapis.com/upload/youtube/v3/videos?mine=true&key=${process.env.REACT_APP_GOOGLE_API_KEY}`,
				{
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${token}`,
					},
				}
			);
			console.log({ res });
		} catch (error) {
			console.log({ publishToYoutube: error });
		}
	};

	return !data ? null : (
		<ReviewModalUI data={data} onClose={onClose} publish={publishToYoutube} />
	);
};

export default ReviewModal;
