import React from 'react';

// styles
import CSSReset from './NormalizeStyles';
import BaseStyles from './BaseStyles';

// components
import Header from './components/Header';
import Routes from './Routes';

export default function App() {
	return (
		<>
      <CSSReset />
      <BaseStyles />
			<Header />
      <main>
        <Routes/>
      </main>
		</>
	);
}
