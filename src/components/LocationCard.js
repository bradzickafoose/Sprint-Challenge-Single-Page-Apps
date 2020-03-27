import React from 'react';
import { Card } from 'semantic-ui-react';

export default function LocationCard({ name, type }) {
	return <Card header={name} meta={type} className='Card' />;
}
