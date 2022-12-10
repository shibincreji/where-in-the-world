import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ country }) => {
	let languages = country.languages ? Object.values(country.languages) : [];
	return (
		<Link to={`/country/${country.cca3}`}>
			<div className="country">
				<div className="image">
					<img src={country.flags[0]} alt="" />
				</div>
				<div className="details">
					<h2>{country.name.common}</h2>
					<p>
						Languages: <span>{languages.join(", ")}</span>
					</p>
					<p>
						Region: <span>{country.region}</span>
					</p>
					<p>
						Capital: <span>{country.capital}</span>
					</p>
				</div>
			</div>
		</Link>
	);
};

export default Card;
