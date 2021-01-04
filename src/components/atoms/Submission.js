import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
	margin-bottom: 12px;
	margin: auto;
	height: 200px;
	background: #fff;
	width: 75%;
	position: relative;
`;
const Wrapper = styled.div`
	height: 100%;
	width: 100%;
	padding: 0 24px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

const Divider = styled.div`
	position: absolute;
	bottom: 0;
	display: ${({ show }) => (show ? 'block' : 'none')};
	width: calc(100% - 48px);
	border: 1px solid #eeeeee;
`;

const Video = styled.video`
	border-radius: 16px;
	object-fit: cover;
`;
const MetadataContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	margin: 0 32px;
	width: 100%;
`;
const Title = styled.p`
	font-size: 24px;
	color: #212121;
	font-weight: 600;
`;
const TagsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-top: 12px;
	justify-content: flex-start;
	align-items: center;
	max-width: 75%;
	max-height: 88px;
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
const CTA = styled.p`
	cursor: pointer;
	padding: 24px 32px;
	background: #000;
	color: #fff;
	font-weight: 600;
	font-size: 18px;
	border-radius: 50px;
	transition: all 0.25s;
	:hover {
		transform: translateY(-5px);
		box-shadow: 0 5px 10px #c8c8c8;
	}
`;

const Submission = ({ data, show, onClick }) => {
	return (
		<Container>
			<Wrapper>
				<Divider show={show} />
				<Video width="200" height="150" src={data.video} />
				<MetadataContainer>
					<Title>{data.title}</Title>
					<TagsContainer>
						{data.tags.map((el, idx) => (
							<Tag key={idx}>{el}</Tag>
						))}
					</TagsContainer>
				</MetadataContainer>
				<CTA onClick={() => onClick(data)}>REVIEW</CTA>
			</Wrapper>
		</Container>
	);
};

export default Submission;
