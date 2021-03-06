import "./index.css";
import "./App.css";

import React from "react";
import ReactDOM from "react-dom";
import {
	HashRouter as Router,
	Switch,
	Redirect,
	Route,
} from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";
import { Typography } from "@material-ui/core";

import CustomThemeProvider from "./components/CustomThemeProvider";
import getTheme from "./components/ThemeSwitcher";
import NavBar from "./components/NavBar";
import MobileDrawer from "./components/MobileDrawer";

import CalculatorPage from "./pages/CalculatorPage";
import AboutPage from "./pages/AboutPage";

import useStyles from "./styles";

function App() {
	const [drawerOpen, setDrawerState] = React.useState(false);
	const classes = useStyles();

	document.getElementsByTagName("body")[0].style.backgroundColor = getTheme(
		localStorage.getItem("appTheme") || "defaultTheme"
	).palette.background.default;

	return (
		<React.StrictMode>
			<Router>
				<CustomThemeProvider>
					<NavBar
						onDrawerToggle={() => setDrawerState(!drawerOpen)}
					/>
					<MobileDrawer
						open={drawerOpen}
						anchor="left"
						onClose={() => setDrawerState(false)}
					/>
					<div style={{ paddingTop: "64px" }}>
						<Switch>
							<Route exact path="/about" component={AboutPage} />
							<Route
								exact
								path="/calculator"
								component={CalculatorPage}
							/>
							<Route exact path="/">
								<Redirect to="/calculator" />
							</Route>
							<CssBaseline />
						</Switch>
					</div>
					<Typography
						className={`${classes.licenseText} ${classes.ptb16}`}
					>
						MeloBlox Calculator © MIT License
					</Typography>
				</CustomThemeProvider>
			</Router>
		</React.StrictMode>
	);
}

ReactDOM.render(<App />, document.getElementById("root"));
