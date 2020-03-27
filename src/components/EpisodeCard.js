import React from 'react';
import { Card } from 'semantic-ui-react';

export default function EpisodeCard({ name, air_date }) {
	return <Card header={name} meta={`Air Date: ${air_date}`} className='Card' />;
}
