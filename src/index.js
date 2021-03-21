import "./index.css";
import "./App.css";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";
import CustomThemeProvider from "./components/CustomThemeProvider";

import { Paper } from "@material-ui/core";

import AboutPage from "./pages/AboutPage";
import CalculatorPage from "./pages/CalculatorPage";
import NavBar from "./components/NavBar";

import { Redirect } from "react-router-dom";

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<CustomThemeProvider>
				<NavBar />
				<Paper
					square
					style={{
						height: "100vh",
						width: "100%",
						position: "fixed",
						overflow: "hidden",
					}}
				>
					<Switch>
						<Route path="/about">
							<AboutPage />
						</Route>
						<Route path="/calculator">
							<CalculatorPage />
						</Route>
						<Route path="/">
							<Redirect to="/calculator" />
						</Route>
						<CssBaseline />
					</Switch>
				</Paper>
			</CustomThemeProvider>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);
