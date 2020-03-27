import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function Header() {
	const HeadingText = styled.div`
		h1 {
			margin-bottom: 0;

			span {
				font-size: 3rem;
			}
			span:first-child {
				color: red;
			}
			span:last-child {
				color: blue;
			}
		}

		p {
			font-family: cursive;
			font-size: 2rem;
			text-align: center;
		}
	`;
	const NavBar = styled.nav`
		display: flex;
		justify-content: space-between;
		margin: 0 auto;
		width: 90%;
	`;
	return (
		<header>
			<HeadingText>
				<h1>
					<span>Rick</span> &amp; <span>Morty</span>
				</h1>
				<p>Fan Page</p>
			</HeadingText>
			<NavBar>
				<NavLink className='nav-link' to='/'>
					Home
				</NavLink>
				<NavLink className='nav-link' to='/characters'>
					Characters
				</NavLink>
				<NavLink className='nav-link' to='/locations'>
					Locations
				</NavLink>
				<NavLink className='nav-link' to='/episodes'>
					Episodes
				</NavLink>
			</NavBar>
		</header>
	);
}
