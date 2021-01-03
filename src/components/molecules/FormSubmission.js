import React, { useState } from 'react';
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

const Title = styled.input`
	border: none;
	padding: 18px;
	border-radius: 16px;
	background: #eeeeee;
	font-size: 16px;
	width: 400px;
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
const CTA = styled.p`
	width: 50%;
	font-weight: 600;
	font-size: 20px;
	color: #fff;
	background: #000;
	padding: 24px;
	border-radius: 50px;
	cursor: pointer;
	box-shadow: 0 5px 10px #c8c8c8;
	text-align: center;
`;

const FormSubmissionUI = ({
	setTitle,
	setDescription,
	chosenTags,
	handleTags,
	onSubmit,
}) => {
	return (
		<Container>
			<Divider />
			<Title
				placeholder="Video Title"
				onChange={(e) => setTitle(e.target.value)}
			/>
			<Description
				placeholder="Video Description"
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
			<CTA onClick={onSubmit}>UPLOAD SUBMISSION</CTA>
		</Container>
	);
};

const FormSubmission = ({
	setTitle,
	setDescription,
	chosenTags,
	setChosenTags,
	onSubmit,
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
			chosenTags={chosenTags}
			handleTags={handleTags}
			onSubmit={onSubmit}
		/>
	);
};
export default FormSubmission;
