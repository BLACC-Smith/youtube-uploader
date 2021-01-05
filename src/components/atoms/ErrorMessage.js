import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
	padding: 12px;
	background: red;
	border-radius: 8px;
	position: absolute;
	bottom: 24px;
	width: calc(100% - 32px);
	max-width: 400px;
	box-shadow: 0 7px 15px #ef9a9a;
	transition: all 0.3s;
	transform: translateY(${({ show }) => (show ? '0' : '100')}px);
`;
const Message = styled.p`
	font-size: 16px;
	font-weight: 500;
	color: #fff;
	text-align: center;
`;

function ErrorMessage({ error }) {
	return (
		<Container show={error}>
			<Message>{error}</Message>
		</Container>
	);
}

export default ErrorMessage;
