import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import theme from "./theme";
import {
	AppBar,
	Toolbar,
	ThemeProvider,
	Icon,
	Typography,
} from "@material-ui/core";
import getPublic from "./getPublic";

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<AppBar position="static" id="appbar">
				<Toolbar>
					<Icon>
						<img
							src={getPublic("favicon.ico")}
							style={{ width: "100%", height: "100%" }}
							alt="MeloBlox Calculator"
						/>
						{" "}
					</Icon>
					<Typography variant="h5">MeloBlox Calculator</Typography>
				</Toolbar>
			</AppBar>
			<App />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
