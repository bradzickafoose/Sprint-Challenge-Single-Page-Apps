import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`
    margin-right: 10px;
    color: #91592a;
    text-decoration: none;
    &:last-child {
        margin-right: 0;
    }
    &:hover {
        text-decoration: underline;
    }
`;

const HeadingText = styled.div`
h1 {
  margin-bottom: 0;
  text-align: center;

  span {
    font-size: 3rem;
  }
  span:first-child {
    color: #a9d3e9;
  }
  span:last-child {
    color: #91592a;
  }
}

p {
  font-family: cursive;
  font-size: 2rem;
  text-align: center;
  margin-top: 0;
}
`;
const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width:60vw;
`;

export default function Header() {

	return (
		<header>
			<HeadingText>
				<h1>
					<span>Rick</span> &amp; <span>Morty</span>
				</h1>
				<p>Fan Page</p>
			</HeadingText>
			<NavBar>
				<StyledNavLink to='/'>
					Home
				</StyledNavLink>
				<StyledNavLink to='/characters'>
					Characters
				</StyledNavLink>
				<StyledNavLink to='/locations'>
					Locations
				</StyledNavLink>
				<StyledNavLink to='/episodes'>
					Episodes
				</StyledNavLink>
			</NavBar>
		</header>
	);
}
