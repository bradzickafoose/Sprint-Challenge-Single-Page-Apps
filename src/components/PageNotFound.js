import React from 'react';

export default function PageNotFound() {
  return (
    <section className='center'>
      <header>
        <h1>Aw jeez Rick, page not found</h1>
        <img
          src='https://rickandmortyapi.com/api/character/avatar/2.jpeg'
          alt='Morty'
        />
      </header>
    </section>
  );
}