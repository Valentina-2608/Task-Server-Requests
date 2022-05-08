import React from 'react';
import {Outlet,NavLink} from 'react-router-dom';

const setActive = ({isActive}) => isActive ? 'active-link' : '';

export const Layout=(props) => {
	return (
		<div className="container">
		<header>
		<NavLink to="/" className={setActive}>Home</NavLink>
		<NavLink to="/newpost" className={setActive}>Method Post</NavLink>
		<NavLink to="/getpost" className={setActive}>Method Get</NavLink>
		<NavLink to="/updatepost" className={setActive}>Method Put</NavLink>
		<NavLink to="/updatefieldpost" className={setActive}>Method Patch</NavLink>
		<NavLink to="/deletedpost" className={setActive}>Method Delete</NavLink>
		</header>
		<Outlet/>
		</div>
	);
	}

