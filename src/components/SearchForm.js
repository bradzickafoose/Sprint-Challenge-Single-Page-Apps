import React, { useEffect, useState } from 'react';

export default function SearchForm() {
	const [ query, setQuery ] = useState('');

	const handleInputChange = (event) => {
		setQuery(event.target.value);
	};
	return (
		<section className='search-form'>
			<form className='search'>
				<input type='text' onChange={handleInputChange} value={query} name='name' placeholder='search by name' />
			</form>
		</section>
	);
}
