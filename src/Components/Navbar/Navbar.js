import React from "react";
import "./Navbar.css";
import { useGlobalContext } from "../../context";
import { IoMoonSharp, IoMoonOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
	const { isDark, setIsDark, setSearchTerm } = useGlobalContext();
	return (
		<nav className="navbar">
			<div className="container">
				<Link to="/">
					<h1
						onClick={() => {
							setSearchTerm("");
						}}
					>
						Where in the world ?
					</h1>
				</Link>
				<div
					className="icon"
					onClick={() => {
						setIsDark(!isDark);
					}}
				>
					{isDark ? <IoMoonOutline /> : <IoMoonSharp />}
					<p>{isDark ? "Light mode" : "Dark mode"}</p>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
