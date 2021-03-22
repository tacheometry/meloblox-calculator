import React from "react";
import { Link as RouterLink } from "react-router-dom";

import {
	AppBar,
	Toolbar,
	Icon,
	Typography,
	FormControlLabel,
	Switch,
	Button,
	Hidden,
	IconButton,
} from "@material-ui/core";
import {
	Menu as MenuIcon,
	PlayCircleFilled,
	Info as InfoIcon,
} from "@material-ui/icons";

import getPublic from "../getPublic";

import { CustomThemeContext } from "./CustomThemeProvider";
import getTheme from "./ThemeSwitcher";

import useStyles from "../styles";

export default function NavBar({ onDrawerToggle }) {
	const classes = useStyles();
	const { currentTheme, setTheme } = React.useContext(CustomThemeContext);
	const isDark = currentTheme === "darkTheme";

	const handleThemeChange = (event) => {
		const theme = event.target.checked ? "darkTheme" : "defaultTheme";

		setTheme(theme);
		document.getElementsByTagName(
			"body"
		)[0].style.backgroundColor = getTheme(theme).palette.background.default;
	};

	return (
		<AppBar position="fixed">
			<Toolbar>
				<Hidden mdUp>
					<IconButton
						onClick={onDrawerToggle}
						component={MenuIcon}
						color="secondary"
					/>
				</Hidden>
				<Icon
					component="img"
					src={getPublic("favicon.ico")}
					alt="MeloBlox Calculator"
				/>
				<Hidden smDown>
					<Typography variant="h5">MeloBlox Calculator</Typography>
				</Hidden>
				<Hidden mdUp>
					<Typography variant="h6">MeloBlox Calculator</Typography>
				</Hidden>
				<Hidden smDown>
					<div className={classes.middleNavbarButtons}>
						<Button
							startIcon={<PlayCircleFilled />} // "calculate" icon is missing :/
							component={RouterLink}
							to="/calculator"
							className={classes.navbar}
						>
							Calculator
						</Button>
						<Button
							startIcon={<InfoIcon />}
							component={RouterLink}
							to="/about"
							className={classes.navbar}
						>
							About
						</Button>
					</div>
				</Hidden>
				<div className="rightAlign">
					<FormControlLabel
						control={
							<Switch
								checked={isDark}
								onChange={handleThemeChange}
							/>
						}
						label={isDark ? "Dark Mode" : "Light Mode"}
						color="secondary"
					/>
				</div>
			</Toolbar>
		</AppBar>
	);
}
