import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import NavBar from "./components/NavBar";
import App from "./App";
import CustomThemeProvider from "./components/CustomThemeProvider";
import CssBaseline from "@material-ui/core/CssBaseline";



ReactDOM.render(
	<React.StrictMode>
		<CustomThemeProvider>
			<CssBaseline />
			<NavBar />
			<App />
		</CustomThemeProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
