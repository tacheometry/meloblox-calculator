import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";
import CustomThemeProvider from "./components/CustomThemeProvider";

import RootPage from "./pages/RootPage";
import NavBar from "./components/NavBar";

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<CustomThemeProvider>
				<NavBar />
				<Switch>
					<Route path="/about"></Route>
					<Router path="/">
						<RootPage />
					</Router>
					<CssBaseline />
				</Switch>
			</CustomThemeProvider>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);
