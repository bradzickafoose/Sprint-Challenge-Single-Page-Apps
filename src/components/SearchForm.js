import React, { useState } from 'react';

export default function SearchForm(props) {
	return (
		<section className='search-form'>
			<form>
				<input
					className='search'
					type='text'
					onChange={props.handleInputChange}
					value={props.query}
					name='name'
					placeholder='search by name'
				/>
			</form>
		</section>
	);
}
