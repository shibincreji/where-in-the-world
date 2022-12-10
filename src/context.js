import React, { useEffect, useState } from "react";
import { useContext, useRef } from "react";
import { fetchCountries, fetchCountry, searchCountry, filterCountries } from "./API";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [searchTerm, setSearchTerm] = useState("");
	const [isDark, setIsDark] = useState(false);
	const [isError, setIsError] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [countries, setCountries] = useState([]);
	const [isFilter, setIsFilter] = useState("All");
	const [refresh, setRefresh] = useState(false);
	const ref = useRef("");

	useEffect(() => {
		const country = async () => {
			try {
				setIsLoading(true);
				setIsError(false);
				const countries = await fetchCountries();
				setCountries(countries);
				setIsLoading(false);
			} catch (error) {
				setIsLoading(false);
				setIsError(true);
			}
		};
		country();
	}, [refresh]);

	useEffect(() => {
		if (!searchTerm) {
			const country = async () => {
				try {
					setIsLoading(true);
					setIsError(false);
					const countries = await fetchCountries();
					setCountries(countries);
					setIsLoading(false);
				} catch (error) {
					setIsLoading(false);
					setIsError(true);
				}
			};
			country();
		} else {
			clearTimeout(ref.current);
			const country = async () => {
				try {
					setIsLoading(true);
					setIsError(false);
					const countries = await searchCountry(searchTerm);
					setCountries(countries);
					setIsLoading(false);
				} catch (error) {
					setIsLoading(false);
					setIsError(true);
				}
			};
			ref.current = setTimeout(country, 1000);
		}
	}, [searchTerm]);

	useEffect(() => {
		if (isFilter === "All") {
			setRefresh(refresh => !refresh);
		} else if (isFilter) {
			const country = async () => {
				try {
					setIsLoading(true);
					setIsError(false);
					const countries = await filterCountries(isFilter);
					setCountries(countries);
					setIsLoading(false);
				} catch (error) {
					setIsLoading(false);
					setIsError(true);
				}
			};
			country();
		}
	}, [isFilter]);

	return (
		<AppContext.Provider
			value={{
				searchTerm,
				setSearchTerm,
				countries,
				setCountries,
				setRefresh,
				refresh,
				isDark,
				setIsDark,
				isLoading,
				fetchCountry,
				setIsLoading,
				setIsError,
				isError,
				isFilter,
				setIsFilter,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
// make sure use
export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
