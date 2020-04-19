import React, { useEffect, useState } from 'react';
import axios from 'axios';

// components
import SearchForm from './SearchForm';
import LocationCard from './LocationCard';

export default function LocationsList() {
	const [ locations, setLocations ] = useState([]);
	const [ searchQuery, setSearchQuery ] = useState('');

	const handleInputChange = event => setSearchQuery(event.target.value);

	useEffect(() => {
		axios
			.get('https://rickandmortyapi.com/api/location/')
			.then(response => {

        const locations = response.data.results.filter(location =>
          location.name
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        );

        setLocations(locations);
			})
			.catch(error => console.log('Error retrieving locations: ', error));
	}, [searchQuery]);

	return (
		<>
			<SearchForm placeHolder='Search locations...' searchQuery={searchQuery} handleInputChange={handleInputChange} />

			<section className='grid location-list'>
				{locations.map(location => <LocationCard key={location.id} {...location} /> )}
			</section>
		</>
	);
}
