import React from 'react';
import { NavLink } from "react-router-dom";
import './navigation.css';

const Navigation = () => {
	return (
		<nav className="nav container">
			<div className="nav__logo">
				<img src='/images/shared/logo.svg' alt="logo" />
			</div>
			<ul className="nav__items" >
				<li className="nav__items-link"><NavLink activeclassname="active" to="/"><span>00</span>Home</NavLink></li>
				<li className="nav__items-link"><NavLink activeclassname="active" to="/Destination"><span>01</span>Destination</NavLink></li>
				<li className="nav__items-link"><NavLink activeclassname="active" to="/Crew"><span>02</span>Crew</NavLink></li>
				<li className="nav__items-link"><NavLink activeclassname="active" to="/Technology"><span>03</span>Technology</NavLink></li>
			</ul>
		</nav>
	);
};

export default Navigation;
