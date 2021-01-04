import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
	padding: 24px;
	background: #fff;
	font-size: 36px;
	font-weight: #212121;
	font-weight: 600;
	box-shadow: 0 10px 20px #c8c8c8;
`;

function Header() {
	return <Container>Dashboard</Container>;
}

export default Header;
