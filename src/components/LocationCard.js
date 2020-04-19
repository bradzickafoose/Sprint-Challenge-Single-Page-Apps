import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    background-color: #fff;
    border: 1px solid #ced4da;
    border-radius: 10px;
    margin: 16px 0 0;
    padding: 20px;
    &:hover {
        transform: scale(1.05);
        transition: all 0.2s ease-in-out;
    }
`;

export default function LocationCard({ name, type, dimension }) {
  return (
      <Card>
          <h3>{name}</h3>
          <div>
              <strong>Type: </strong> {type}
          </div>
          <div>
              <strong>Location: </strong>
              {dimension}
          </div>
      </Card>
  );
}
