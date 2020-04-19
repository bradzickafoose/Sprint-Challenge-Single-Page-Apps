import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  const [ characters, setCharacters ] = useState([]);
  const [ searchQuery, setSearchQuery ] = useState('');

  const handleInputChange = event => setSearchQuery(event.target.value);

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => {

        const characters = response.data.results.filter(character =>
          character.name
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        );

        setCharacters(characters);
      })
      .catch(error => console.log('Error retrieving characters: ', error));
    }, [searchQuery]);

	return (
		<>
			<SearchForm placeHolder='Search characters...' searchQuery={searchQuery} handleInputChange={handleInputChange} />

			<section className='grid character-list'>
				{characters.map(character => <CharacterCard key={character.id} {...character} /> )}
			</section>
		</>
	);
}
