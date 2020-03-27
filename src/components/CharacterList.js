import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  const [ characterData, setCharacterData ] = useState([]);
  const [ searchQuery, setSearchQuery ] = useState('');

  const handleInputChange = (event) => {
		  setSearchQuery(event.target.value);
	};

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then((response) => {
        const characters = response.data.results.filter(character =>
          character.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        // console.log("rick and morty characters:", response);
        setCharacterData(characters);
      })
      .catch((error) => {
        console.log('Error: ', error);
      });
    }, [searchQuery]);

	return (
		<>
			<SearchForm placeHolder='Search characters...' searchQuery={searchQuery} handleInputChange={handleInputChange} />

			<section className='grid character-list'>
				{characterData.map((character) => {
					return (
						<CharacterCard
							key={character.id}
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
		</>
	);
}
