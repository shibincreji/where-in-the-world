import React from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import "./Error.css";
import { useGlobalContext } from "../../context";

const Error = () => {
	const { setRefresh, refresh, setSearchTerm } = useGlobalContext();
	return (
		<div className="error">
			<h1>There is nothing to show :(</h1>
			<div className="btn">
				<Link to="/">
					<button
						className="back"
						onClick={() => {
							setSearchTerm("");
							setRefresh(!refresh);
						}}
					>
						<BsArrowLeft className="back-icon" />
						Back
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Error;
