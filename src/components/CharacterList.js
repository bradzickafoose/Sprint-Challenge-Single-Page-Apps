import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function CharacterList() {
	// TODO: Add useState to track data from useEffect
	const [ character, setCharacter ] = useState([]);

	useEffect(() => {
		// TODO: Add API Request here - must run in `useEffect`
		//  Important: verify the 2nd `useEffect` parameter: the dependancies array!
		axios.get('https://rickandmortyapi.com/api/character/').then((response) => {
			console.log('Rick and Morty Characters:', response.data.results);
			setCharacter(response.data.results);
		});
	}, []);

	return (
		<section className='character-list'>
			<h2>TODO: `array.map()` over your state here!</h2>
		</section>
	);
}
