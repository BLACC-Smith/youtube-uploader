import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Header from '../atoms/Header';
import { getSubmissions } from '../../backend';
import Submission from '../atoms/Submission';

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	position: relative;
`;
const SubmissionWrapper = styled.div`
	padding-top: 24px;
	z-index: 1;
`;

const HomeUI = ({ submissions }) => {
	return (
		<Container>
			<Header />
			<SubmissionWrapper>
				{submissions.map((el, idx) => (
					<Submission
						key={idx}
						data={el}
						show={idx !== submissions.length - 1}
					/>
				))}
			</SubmissionWrapper>
		</Container>
	);
};

const Home = () => {
	const [submissions, setSubmissions] = useState([]);
	useEffect(() => {
		getSubmissions(setSubmissions);
	}, []);
	return <HomeUI submissions={submissions} />;
};

export default Home;
