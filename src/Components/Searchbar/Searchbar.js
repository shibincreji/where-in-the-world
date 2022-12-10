import React from "react";
import "./Searchbar.css";
import { BiSearch } from "react-icons/bi";
import { useGlobalContext } from "../../context";
import { MdCancel } from "react-icons/md";

const Searchbar = () => {
	const { searchTerm, setSearchTerm } = useGlobalContext();
	return (
		<div className="search">
			<BiSearch className="icon" />
			<input
				type="text"
				placeholder="Search for a country..."
				value={searchTerm}
				onChange={(e) => {
					setSearchTerm(e.target.value);
				}}
			/>
			<MdCancel
				className="icon"
				onClick={() => {
					setSearchTerm("");
				}}
			/>
		</div>
	);
};

export default Searchbar;
