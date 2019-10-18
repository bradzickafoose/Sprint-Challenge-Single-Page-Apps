import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';

export default function CharacterList() {
	// TODO: Add useState to track data from useEffect
	const [ characters, setCharacters ] = useState([]);

	useEffect(() => {
		// TODO: Add API Request here - must run in `useEffect`
		//  Important: verify the 2nd `useEffect` parameter: the dependancies array!
		axios.get('https://rickandmortyapi.com/api/character/').then((response) => {
			console.log('Rick and Morty Characters:', response.data.results);
			setCharacters(response.data.results);
		});
	}, []);

	if (!characters) {
		return <h1>Loading...</h1>;
	}

	return (
		<section className='character-list'>
			{characters.map((character) => {
				return (
					<CharacterCard
						image={character.image}
						name={character.name}
						species={character.species}
						status={character.status}
						location={character.location.name}
						origin={character.origin.name}
					/>
				);
			})}
		</section>
	);
}
