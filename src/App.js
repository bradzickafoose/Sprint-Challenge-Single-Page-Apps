import React from 'react';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import CharacterList from './components/CharacterList';

export default function App() {
	return (
		<main>
			<Header />
			<SearchForm />
			<CharacterList />
		</main>
	);
}
