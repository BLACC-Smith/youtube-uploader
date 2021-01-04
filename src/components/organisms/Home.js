import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Header from '../atoms/Header';
import { getSubmissions } from '../../backend';
import Submission from '../atoms/Submission';
import ReviewModal from '../molecules/ReviewModal';

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	position: relative;
`;
const SubmissionWrapper = styled.div`
	padding: 24px 0 90px 0;
	z-index: 1;
	height: 100%;
	overflow-y: scroll;
`;

const HomeUI = ({ submissions, selectedSubmission, setSelectedSubmission }) => {
	return (
		<Container>
			<Header />
			<ReviewModal
				data={selectedSubmission}
				onClose={() => setSelectedSubmission(null)}
			/>
			<SubmissionWrapper>
				{submissions.map((el, idx) => (
					<Submission
						key={idx}
						data={el}
						show={idx !== submissions.length - 1}
						onClick={setSelectedSubmission}
					/>
				))}
			</SubmissionWrapper>
		</Container>
	);
};

const Home = () => {
	const [submissions, setSubmissions] = useState([]);
	const [selectedSubmission, setSelectedSubmission] = useState(null);

	useEffect(() => {
		getSubmissions(setSubmissions);
	}, []);
	return (
		<HomeUI
			submissions={submissions}
			selectedSubmission={selectedSubmission}
			setSelectedSubmission={setSelectedSubmission}
		/>
	);
};

export default Home;
