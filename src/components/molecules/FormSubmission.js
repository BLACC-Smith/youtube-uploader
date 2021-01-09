import React from 'react';
import styled from '@emotion/styled';
import { tags } from '../../constants';

const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	position: relative;
`;
const Divider = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 2px;
	background: #e0e0e0;
`;

const Input = styled.input`
	border: none;
	padding: 18px;
	border-radius: 16px;
	background: #eeeeee;
	font-size: 16px;
	width: 190px;
`;
const Description = styled.textarea`
	border: none;
	padding: 16px;
	border-radius: 16px;
	background: #eeeeee;
	font-size: 14px;
	width: 400px;
	height: 100px;
	resize: none;
	margin-top: 12px;
`;
const TagsContainer = styled.div`
	margin: 32px 0;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	max-width: 75%;
`;
const Tag = styled.p`
	padding: 12px 16px;
	font-size: 12px;
	cursor: pointer;
	border-radius: 30px;
	margin-bottom: 12px;
	margin-right: 12px;
	transition: all 0.15s ease-out;
	${({ chosen }) =>
		chosen
			? `background: #000; color: #fff;`
			: `background: #eeeeee; color: #525456;`}

	:hover {
		background: #000;
		color: #fff;
		${({ chosen }) =>
			chosen
				? ''
				: `transform: translateY(-5px); box-shadow: 0 3px 6px #c8c8c8`}
	}
`;
const CTAWrapper = styled.div`
	position: relative;
	overflow: hidden;
	border-radius: 50px;
	box-shadow: 0 5px 10px #c8c8c8;
`;
const CTA = styled.p`
	color: #fff;
	width: 100%;
	background: #000;
	font-weight: 600;
	font-size: 20px;
	padding: 24px;
	border-radius: 50px;
	cursor: pointer;
	text-align: center;
`;
const Progress = styled.div`
	background: ${({ progress }) => (progress > 99 ? '#4BB543' : '#fff')};
	height: 100%;
	position: absolute;
	left: 0;
	top: 0;
	transition: all 0.3s;
	width: ${({ progress }) => progress}%;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const ProgressWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.15s;
	opacity: ${({ show }) => (show ? 1 : 0)};
	${({ show }) =>
		show
			? `i, p {
		color: #fff; 
	}`
			: ''}
`;
const Icon = styled.i`
	color: #000;
	font-size: 18px;
`;
const Message = styled.p`
	color: #000;
	font-size: 18px;
	font-weight: 500;
	margin-left: 12px;
`;
const Row = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 400px;
`;

const FormSubmissionUI = ({
	setTitle,
	setDescription,
	chosenTags,
	handleTags,
	onSubmit,
	username,
	setUsername,
	title,
	description,
	progress,
}) => {
	return (
		<Container>
			<Divider />
			<Row>
				<Input
					type="text"
					placeholder="Discord Username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<Input
					type="text"
					placeholder="Video Title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
			</Row>
			<Description
				placeholder="Video Description"
				value={description}
				onChange={(e) => setDescription(e.target.value)}
				resi
			/>
			<TagsContainer>
				{tags.map((el, idx) => (
					<Tag
						key={idx}
						chosen={chosenTags.includes(el)}
						onClick={() => handleTags(el)}
					>
						{el}
					</Tag>
				))}
			</TagsContainer>
			<CTAWrapper onClick={onSubmit}>
				<CTA>UPLOAD SUBMISSION </CTA>
				<Progress progress={progress}>
					<ProgressWrapper show={progress > 99}>
						<Icon className="material-icons">check_circle</Icon>
						<Message>UPLOAD COMPLETE</Message>
					</ProgressWrapper>
				</Progress>
			</CTAWrapper>
		</Container>
	);
};

const FormSubmission = ({
	setTitle,
	setUsername,
	username,
	setDescription,
	chosenTags,
	setChosenTags,
	onSubmit,
	progress,
	title,
	description,
}) => {
	const handleTags = (tag) => {
		if (chosenTags.includes(tag))
			setChosenTags(chosenTags.filter((el) => el !== tag));
		else setChosenTags([...chosenTags, tag]);
	};
	return (
		<FormSubmissionUI
			setTitle={setTitle}
			setDescription={setDescription}
			title={title}
			username={username}
			setUsername={setUsername}
			description={description}
			chosenTags={chosenTags}
			handleTags={handleTags}
			progress={progress}
			onSubmit={onSubmit}
		/>
	);
};
export default FormSubmission;
