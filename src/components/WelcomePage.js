import React from 'react';

export default function WelcomePage() {
	return (
		<section className='welcome-page'>
			<header>
				<h2 className='center'>Welcome to the ultimate fan site!</h2>
				<div className='center'>
					<img className='main-img' src='https://rickandmortyapi.com/api/character/avatar/1.jpeg' alt='rick' />
				</div>
			</header>
		</section>
	);
}
