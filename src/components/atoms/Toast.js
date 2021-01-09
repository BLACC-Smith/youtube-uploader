import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
	padding: 12px;
	background: ${({ isError }) => (isError ? 'red' : '#4BB543')};
	border-radius: 8px;
	position: absolute;
	bottom: 24px;
	width: calc(100% - 32px);
	max-width: 400px;
	box-shadow: 0 7px 15px ${({ isError }) => (isError ? '#ef9a9a' : '#82cc7d')};
	transition: all 0.3s;
	transform: translateY(${({ show }) => (show ? '0' : '100')}px);
`;
const Message = styled.p`
	font-size: 16px;
	font-weight: 500;
	color: #fff;
	text-align: center;
`;

function Toast({ error, show }) {
	return (
		<Container show={show || error} isError={error}>
			<Message>{error || `We'll follow up with you soon`}</Message>
		</Container>
	);
}

export default Toast;
