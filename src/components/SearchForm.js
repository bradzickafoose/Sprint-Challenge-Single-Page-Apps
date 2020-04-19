import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
`;

export default function SearchForm({ handleInputChange, searchQuery, placeHolder }) {
	return (
		<section className='center'>
			<form>
				<StyledInput
					type='text'
					onChange={handleInputChange}
					value={searchQuery}
					placeholder={placeHolder}
				/>
			</form>
		</section>
	);
}
