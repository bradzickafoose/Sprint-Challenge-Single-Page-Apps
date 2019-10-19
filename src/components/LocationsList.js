import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';
import LocationCard from './LocationCard';

export default function LocationsList() {
	const [ locationData, setLocationData ] = useState([]);
	const [ searchQuery, setSearchQuery ] = useState('');

	const handleInputChange = (event) => {
		setSearchQuery(event.target.value);
  };

	useEffect(() => {
		axios
			.get('https://rickandmortyapi.com/api/location/')
			.then((response) => {
				const locations = response.data.results.filter(location =>
					location.name.toLowerCase().includes(searchQuery.toLowerCase())
				  );
				  // console.log("rick and morty locations:", response);
				  setLocationData(locations);
				})
				.catch((error) => {
				  console.log('Error: ', error);
				});
			  }, [searchQuery]);

	return (
		<>
			<SearchForm placeHolder='Search locations...' searchQuery={searchQuery} handleInputChange={handleInputChange} />

			<section className='grid location-list'>
				{locationData.map((location) => {
					return (
						<LocationCard
							key={location.id}
							name={location.name}
							type={location.type}
						/>
					);
				})}
			</section>
		</>
	);
}
