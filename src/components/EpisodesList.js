import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';
import EpisodeCard from './EpisodeCard';

export default function EpisodesList() {
	const [ episodes, setEpisodes ] = useState([]);
	const [ searchQuery, setSearchQuery ] = useState('');

	const handleInputChange = event => setSearchQuery(event.target.value);

	useEffect(() => {
		axios
			.get('https://rickandmortyapi.com/api/episode/')
			.then(response => {

        const episodes = response.data.results.filter(episode =>
          episode.name
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
          );

          setEpisodes(episodes);
        })
      .catch(error => console.log('Error retrieving episodes:', error));
    }, [searchQuery]);

	return (
		<>
			<SearchForm placeHolder='Search episodes...' searchQuery={searchQuery} handleInputChange={handleInputChange} />

			<section className='grid episode-list'>
				{episodes.map(episode => <EpisodeCard key={episode.id} {...episode} /> )}
			</section>
		</>
	);
}
