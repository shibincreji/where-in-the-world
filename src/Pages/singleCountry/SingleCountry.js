import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useGlobalContext } from "../../context";
import "./SingleCountry.css";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";

const SingleCountry = () => {
	const { code } = useParams();
	const { fetchCountry, setIsLoading, setIsError, isLoading } = useGlobalContext();
	const [country, setCountry] = useState(null);
	let currencies = country?.currencies
		? Object.values(country.currencies)
		: [{ name: "none", symbol: "not available" }];
	let languages = country?.languages ? Object.values(country.languages) : [];

	useEffect(() => {
		setIsLoading(true);
		async function country() {
			try {
				setIsError(false);
				let countryData = await fetchCountry(code);
				setCountry(countryData);
				setIsLoading(false);
			} catch (error) {
				setIsLoading(false);
				setIsError(true);
			}
		}
		country();
	}, [code, fetchCountry, setIsError, setIsLoading]);

	if (isLoading) {
		return <Loading />;
	} else if (country && !country.hasOwnProperty("message")) {
		return (
			<div className="app">
				<div className="container">
					<div className="btn">
						<Link to="/">
							<button className="back">
								<BsArrowLeft className="back-icon" />
								Back
							</button>
						</Link>
					</div>
					<div className="flex-container">
						<div className="flag">
							<img src={country.flags[0]} alt="" />
						</div>
						<div className="data">
							<h1>{country.name.common}</h1>
							<div className="details">
								<div className="left">
									<p>
										Native Name: <span>{country.name.official}</span>
									</p>
									<p>
										Position:{" "}
										<span>{`Latitude - ${country.latlng[0]}, Longitude - ${country.latlng[1]}`}</span>
									</p>
									<p>
										Region: <span>{country.region}</span>
									</p>
									<p>
										Sub Region: <span>{country.subregion}</span>
									</p>
									<p>
										Capital: <span>{country.capital[0]}</span>
									</p>
								</div>
								<div className="right">
									<p>
										Currency:{" "}
										<span>
											{`${currencies[0]?.name} (${currencies[0]?.symbol})`}
										</span>
									</p>
									<p>
										Languages: <span>{languages.join(", ")}</span>
									</p>
								</div>
							</div>
							<div className="borders">
								<p>Border Countries:</p>
								{country.borders?.map((border, index) => {
									return (
										<Link to={`/country/${border}`} key={index}>
											<div className="border">{border}</div>
										</Link>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		return <Error />;
	}
};

export default SingleCountry;
