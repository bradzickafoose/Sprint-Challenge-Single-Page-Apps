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
`;

export default function EpisodeCard({ name, air_date, episode }) {
  return (
    <Card>
        <h3>{name}</h3>
        <div>
            <strong>Air Date: </strong> {air_date}
        </div>
        <div>
            <strong>Episode: </strong>
            {episode}
        </div>
    </Card>
);
}
