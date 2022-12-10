import React from "react";
import { useGlobalContext } from "../../context";
import "./FIlter.css";
import { AiOutlineCaretDown } from "react-icons/ai";

const Filter = () => {
	const { setIsFilter, isFilter } = useGlobalContext();
	const filter = e => {
		setIsFilter(e.target.innerText);
	};
	return (
		<div className="select">
			<header>
				<p>{isFilter}</p>
				<AiOutlineCaretDown />
			</header>
			<main onClick={filter}>
				<p>All</p>
				<p>Africa</p>
				<p>America</p>
				<p>Asia</p>
				<p>Europe</p>
				<p>Oceania</p>
			</main>
		</div>
	);
};

export default Filter;
