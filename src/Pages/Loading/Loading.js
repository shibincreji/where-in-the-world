import React from "react";
import "./Loading.css";
import { FaGlobeAsia } from "react-icons/fa";

const Loading = () => {
	return (
		<div className="loading">
			<div className="circle">
				<FaGlobeAsia />
			</div>
		</div>
	);
};

export default Loading;
