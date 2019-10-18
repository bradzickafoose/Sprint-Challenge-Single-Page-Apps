import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';
import LocationsList from './components/LocationsList';
// import EpisodesList from './components/EpisodesList';

export default function App() {
	return (
		<main>
			<Header />
			<Route exact path='/' component={WelcomePage} />
			<Route path='/characters' component={CharacterList} />
			<Route path='/locations' component={LocationsList} />
			{/* <Route path='/episodes' component={EpisodesList} /> */}
		</main>
	);
}
