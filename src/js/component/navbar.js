import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./dropdown";

export const Navbar = props => {
	return (
		<nav className="navbar navbar-dark bg-dark mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 ml-5 pl-5">
					<img
						src="https://logos-download.com/wp-content/uploads/2016/09/Star_Wars_logo-1.png"
						height="50px"
					/>
				</span>
			</Link>
			<div className="ml-auto mr-5 pr-5">
				<Dropdown />
			</div>
		</nav>
	);
};
