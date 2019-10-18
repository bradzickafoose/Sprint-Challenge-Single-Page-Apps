import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';

export default function App() {
	return (
		<main>
			<Header />
			<Route exact path='/' component={WelcomePage} />
			<Route exact path='/character' component={CharacterList} />
		</main>
	);
}
