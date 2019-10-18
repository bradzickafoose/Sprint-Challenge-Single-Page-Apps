import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function Header() {
	const NavBar = styled.nav`
		display: flex;
		justify-content: space-between;
		margin: 0 auto;
		width: 90%;
	`;
	return (
		<header className='ui centered'>
			<h1 className='ui center'>Rick &amp; Morty Fan Page</h1>
			<NavBar>
				<NavLink class='nav-link' to='/'>
					Home
				</NavLink>
				<NavLink class='nav-link' to='/characters'>
					Characters
				</NavLink>
				<NavLink class='nav-link' to='/locations'>
					Locations
				</NavLink>
				<NavLink class='nav-link' to='/episodes'>
					Episodes
				</NavLink>
			</NavBar>
		</header>
	);
}
