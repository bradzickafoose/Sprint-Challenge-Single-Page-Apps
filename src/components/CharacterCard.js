import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    background-color: #fff;
    border: 1px solid #ced4da;
    border-radius: 10px;
    margin: 0;
    padding: 1.5rem;
    &:hover {
        transform: scale(1.05);
        transition: all 0.2s ease-in-out;
    }
    h3 {
      margin-top: 0;
    }
    p {
      margin-bottom: 0;
    }

`;

export default function CharacterCard({ image, name, status, species, gender }) {
	return (
    <Card>
      <h3>{name}</h3>
      <img alt={name} src={image} />
      <p><strong>Status: </strong>{status}</p>
      <p><strong>Species: </strong>{species}</p>
      <p><strong>Gender: </strong>{gender}</p>
    </Card>
	);
}
