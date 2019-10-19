import React from 'react';
import styled from 'styled-components';

export default function SearchForm(props) {
	const Form = styled.form`margin-top: .5em;`;
	return (
		<section className='center'>
			<Form>
				<input
					className='search'
					type='text'
					onChange={props.handleInputChange}
					value={props.searchQuery}
					placeholder={props.placeHolder}
					tabIndex='0'
					autoComplete='off'
				/>
			</Form>
		</section>
	);
}
