import React, { useContext } from "react";
import {
	AppBar,
	Toolbar,
	Icon,
	Typography,
	FormControlLabel,
	Switch,
	Button,
	Hidden,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

import getPublic from "../getPublic";
import { CustomThemeContext } from "./CustomThemeProvider";
import { makeStyles } from "@material-ui/core/styles";

import { slide as Menu } from "react-burger-menu";

const useStyles = makeStyles((theme) => ({
	root: {
		background: theme.palette.background,
		position: "fixed",
	},
	mr8: {
		marginRight: 8,
	},
	mr16: {
		marginRight: 16,
	},
	iconStyle: {
		height: "100%",
	},
	right: {
		marginLeft: "auto",
	},
	themeText: {
		color: theme.palette.background.contrastText,
	},
	sectionDesktop: {
		display: "none",
		[theme.breakpoints.up("md")]: {
			display: "flex",
		},
		right: true,
	},

	/* BURGER (Maybe useful) */
	bmBurgerButton: {
		height: 32,
		width: 32,
		position: "fixed",
		right: 16,
		top: 12,
	},
	bmBurgerBars: {
		//background: "#373a47",
		background: theme.palette.background.contrastText,
	},
	bmCrossButton: {
		height: 24,
		width: 24,
	},
	bmCross: {
		// background: "#bdc3c7",
		background: theme.palette.background.contrastText,
	},
	bmMenu: {
		background: theme.palette.secondary.dark,
		marginTop: -64,
		padding: "2.5em 1.5em 0",
		fontSize: "1.15em",
	},
}));

export default function NavBar() {
	const classes = useStyles();
	const { currentTheme, setTheme } = useContext(CustomThemeContext);
	const isDark = Boolean(currentTheme === "darkTheme");

	const handleThemeChange = (event) => {
		setTheme(event.target.checked ? "darkTheme" : "defaultTheme");
	};

	return (
		<AppBar id="appbar" className={{ root: classes.root }}>
			<Toolbar>
				<Icon className={classes.mr8}>
					<img
						src={getPublic("favicon.ico")}
						className={classes.iconStyle}
						alt="MeloBlox Calculator"
					/>
				</Icon>
				<Typography variant="h5" className={classes.mr16}>
					MeloBlox Calculator
				</Typography>
				<Hidden smUp>
					<Menu
						right
						width={"50vw"}
						burgerButtonClassName={classes.bmBurgerButton}
						burgerBarClassName={classes.bmBurgerBars}
						crossButtonClassName={classes.bmCrossButton}
						crossClassName={classes.bmCross}
						menuClassName={classes.bmMenu}
					>
						<Typography variant="body1">Choose the Page</Typography>
						<Button
							component={RouterLink}
							to="/calculator"
							className={classes.themeText}
						>
							Calculator
						</Button>
						<Button
							component={RouterLink}
							to="/about"
							className={classes.themeText}
						>
							About
						</Button>
						<FormControlLabel
							control={
								<Switch
									checked={isDark}
									onChange={handleThemeChange}
								/>
							}
							label={isDark ? "Dark Theme" : "Light Theme"}
							color="secondary"
						/>
					</Menu>
				</Hidden>
				<Hidden xsDown>
					<Button
						component={RouterLink}
						to="/calculator"
						className={classes.themeText}
					>
						Calculator
					</Button>
					<Button
						component={RouterLink}
						to="/about"
						className={classes.themeText}
					>
						About
					</Button>
					<div className="rightAlign">
						<FormControlLabel
							control={
								<Switch
									checked={isDark}
									onChange={handleThemeChange}
								/>
							}
							label={isDark ? "Dark Theme" : "Light Theme"}
							color="secondary"
						/>
					</div>
				</Hidden>
			</Toolbar>
		</AppBar>
	);
}
