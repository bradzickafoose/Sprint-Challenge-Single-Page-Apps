import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';
import jssPluginPropsSort from 'jss-plugin-props-sort';

export default function CharacterList() {
	// TODO: Add useState to track data from useEffect
	const [ characters, setCharacters ] = useState([]);
	const [ query, setQuery ] = useState('');
	const [ filteredCharacter, setFilteredCharacter ] = useState([]);

	useEffect(() => {
		// TODO: Add API Request here - must run in `useEffect`
		//  Important: verify the 2nd `useEffect` parameter: the dependancies array!
		axios.get('https://rickandmortyapi.com/api/character/').then((response) => {
			console.log('Rick and Morty Characters:', response.data.results);
			setCharacters(response.data.results);
			setFilteredCharacter(response.data.results);
		});
	}, []);

	useEffect(
		() => {
			setFilteredCharacter(
				characters.filter((character) => character.name.toLowerCase().includes(query.toLowerCase())),
			);
		},
		[ query, characters ],
	);

	const handleInputChange = (event) => {
		event.preventDefault();
		setQuery(event.target.value);
	};

	if (!characters) {
		return <h1>Loading...</h1>;
	}

	return (
		<div>
			<SearchForm onChange={handleInputChange} value={query} />
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
		</div>
	);
}
