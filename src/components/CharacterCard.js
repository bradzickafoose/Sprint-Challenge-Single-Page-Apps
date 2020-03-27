import React from 'react';
import { Card } from 'semantic-ui-react';

export default function CharacterCard({ image, name, status, location, origin }) {
	return (
		<Card
			image={image}
			header={name}
			meta={`Status: ${status}`}
			description={
				<div>
					<p>{`Location: ${location}`}</p>
					<p>{`Origin: ${origin}`}</p>
				</div>
			}
			className='Card'
		/>
	);
}
