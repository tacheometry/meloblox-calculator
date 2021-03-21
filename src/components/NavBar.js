import React, { useContext } from "react";
import {
	AppBar,
	Toolbar,
	Icon,
	Typography,
	FormControlLabel,
	Switch,
	Grid,
	Button,
	Link,
} from "@material-ui/core";
import { Link as RouterLink, Redirect } from "react-router-dom";

import getPublic from "../getPublic";
import { CustomThemeContext } from "./CustomThemeProvider";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		background: theme.palette.background,
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

	/* May be useful ?
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    title: {
      flexGrow: 1,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: 'auto',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },*/
}));

export default function NavBar() {
	const classes = useStyles();
	const { currentTheme, setTheme } = useContext(CustomThemeContext);
	const isDark = Boolean(currentTheme === "darkTheme");

	const handleThemeChange = (event) => {
		setTheme(event.target.checked ? "darkTheme" : "defaultTheme");
	};

	return (
		<AppBar
			position="static"
			id="appbar"
			className={{ root: classes.root }}
		>
			<Toolbar>
				{/* <Grid container alignItems="center">
					<Grid>
						<Grid container direction="row"> */}
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
				{/* </Grid>
					</Grid>
					<Grid className={classes.right}> */}
				{/* // 	</Grid>
				// </Grid> */}
				<Button component={RouterLink} to="/calculator">
					Calculator
				</Button>
				<Button component={RouterLink} to="/about">
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
			</Toolbar>
		</AppBar>
	);
}
