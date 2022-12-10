import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import { useGlobalContext } from "./context";
import Error from "./Pages/Error/Error";
import Home from "./Pages/Home/Home";
import SingleCountry from "./Pages/singleCountry/SingleCountry";

function App() {
	const { isDark } = useGlobalContext();
	return (
		<div className={isDark ? "dark page" : "light page"}>
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" exact>
						<Home />
					</Route>
					<Route path="/country/:code">
						<SingleCountry />
					</Route>
					<Route path="*">
						<Error />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
