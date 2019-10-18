import React from 'react';
import { Card } from 'semantic-ui-react';

export default function CharacterCard({ image, name, status }) {
	return <Card image={image} header={name} meta={status} className='Card' />;
}
