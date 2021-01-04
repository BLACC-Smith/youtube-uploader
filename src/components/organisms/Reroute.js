import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import bg from '../../res/blacc.png';

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
	background: #000;
`;
const BG = styled.img`
	object-fit: cover;
	height: 50%;
	width: auto;
`;

function Reroute() {
	useEffect(() => (window.location = 'https://discord.gg/9Bh3TZ2'), []);
	return (
		<Container>
			<BG src={bg} />
		</Container>
	);
}

export default Reroute;
