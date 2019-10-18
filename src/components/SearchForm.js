import React from 'react';

export default function SearchForm(props) {
	return (
		<section className='search-form'>
			<form>
				<input
					className='search'
					type='text'
					onChange={props.handleInputChange}
					value={props.searchQuery}
					placeholder={props.placeHolder}
					tabIndex='0'
					autoComplete='off'
				/>
			</form>
		</section>
	);
}
