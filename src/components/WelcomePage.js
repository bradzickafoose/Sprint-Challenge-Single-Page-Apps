import React from 'react';
import styled from 'styled-components';

export default function WelcomePage() {
	const AlignCenter = styled.div`text-align: center;`;
	return (
		<section className='welcome-page'>
			<header>
				<h2>Welcome to the ultimate fan site!</h2>
				<AlignCenter>
					<img className='main-img' src='https://rickandmortyapi.com/api/character/avatar/1.jpeg' alt='rick' />
				</AlignCenter>
			</header>
		</section>
	);
}
