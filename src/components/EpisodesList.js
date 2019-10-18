import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';
import EpisodeCard from './EpisodeCard';

export default function EpisodesList() {
	const [ episodeData, setEpisodeData ] = useState([]);
	const [ searchQuery, setSearchQuery ] = useState('');

	const handleInputChange = (event) => {
		setSearchQuery(event.target.value);
  };

	useEffect(() => {
		axios
			.get('https://rickandmortyapi.com/api/episode/')
			.then((response) => {
				const episodes = response.data.results.filter(episode =>
					episode.name.toLowerCase().includes(searchQuery.toLowerCase())
				  );
				  console.log("rick and morty episodes:", response);
				  setEpisodeData(episodes);
				})
				.catch((error) => {
				  console.log('Error: ', error);
				});
			  }, [searchQuery]);

	return (
		<>
			<SearchForm placeHolder='Search episodes...' searchQuery={searchQuery} handleInputChange={handleInputChange} />

			<section className='episode-list'>
				{episodeData.map((episode) => {
					return (
						<EpisodeCard
							key={episode.id}
                            name={episode.name}
                            air_date={episode.air_date}
						/>
					);
				})}
			</section>
		</>
	);
}
