import React from 'react';
import { Switch, Route } from 'react-router-dom';

// components
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';
import LocationsList from './components/LocationsList';
import EpisodesList from './components/EpisodesList';
import PageNotFound from './components/PageNotFound';

export default function Router() {
  return (
    <Switch>
      <Route exact path='/' component={WelcomePage} />
      <Route path='/characters' component={CharacterList} />
      <Route path='/locations' component={LocationsList} />
      <Route path='/episodes' component={EpisodesList} />
      <Route component={PageNotFound} />
    </Switch>
  );
}