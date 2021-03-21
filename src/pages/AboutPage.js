import { Grid } from "@material-ui/core";
import PaperItem from "../components/PaperItem";

import { makeStyles } from "@material-ui/core/styles";

import { Link, Button, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	p8: {
		padding: 8,
	},
	paper: {
		background: theme.palette.background.main,
	},
	maxWidth: {
		maxWidth: "500px",
	},
	p16: {
		padding: 16,
	},
	spacing: {
		margin: 16,
	},
	imageButton: {
		backgroundColor: "transparent",
		width: "80px",
	},
}));

function LinkButton(props) {
	return (
		<Grid item component={PaperItem}>
			<Button href={props.link} target="_blank" rel="noreferrer noopener">
				<Grid container justify="center" direction="column">
					<Grid
						item
						style={{
							marginLeft: "auto",
							marginRight: "auto",
							dislpay: "block",
						}}
					>
						{props.children}
					</Grid>
					<Grid item>
						<Typography>{props.text}</Typography>
					</Grid>
				</Grid>
			</Button>
		</Grid>
	);
}

export default function () {
	const classes = useStyles();

	return (
		<Grid container justify="center" className={classes.spacing}>
			<PaperItem
				lg={5}
				md={7}
				className={`${classes.p16} ${classes.paper} ${classes.spacing} ${classes.maxWidth}`}
			>
				<h2 style={{ marginBottom: 0 }}>Meloblox Calculator</h2>
				<h5 style={{ marginTop: 0 }}>
					by{" "}
					<Link href="https://github.com/tacheometry">
						tacheometry
					</Link>{" "}
					& <Link href="https://github.com/EriiYenn">EriiYenn</Link>
				</h5>
				<p>
					It all started with an Early Access game on Roblox called
					MeloBlox from an amazing developer Poinball. The game is
					pretty grindy and our goal after tens of hours spent in the
					game was to give the community a tool to approximate their
					loot.
					<br />
					<br />
					You too can contribute to this project! Go to the GitHub
					page and{" "}
					<Link href="https://github.com/tacheometry/meloblox-calculator/issues">
						file an Issue
					</Link>
					, or{" "}
					<Link href="https://github.com/tacheometry/meloblox-calculator/pulls">
						open a Pull Request
					</Link>{" "}
					if you want to merge your code.
				</p>
				<Grid container justify="center">
					<Grid item style={{ aspectRatio: 1 }}>
						<LinkButton
							link="https://github.com/tacheometry/meloblox-calculator"
							text="GitHub repository"
						>
							<svg
								height="80"
								viewBox="0 0 16 16"
								version="1.1"
								width="80"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
								></path>
							</svg>
						</LinkButton>
					</Grid>
					<Grid item>
						<LinkButton
							link="https://www.roblox.com/games/5803957966/"
							text="Play MeloBlox"
						>
							<img
								height="80px"
								width="80px"
								src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Roblox_player_icon_black.svg"
							/>
						</LinkButton>
					</Grid>
					<Grid item>
						<LinkButton
							link="https://discord.gg/tMJFtnWSTU"
							text="MeloBlox Discord"
						>
							<img
								height="80px"
								width="80px"
								src="https://discord.com/assets/41484d92c876f76b20c7f746221e8151.svg"
							/>
						</LinkButton>
					</Grid>
				</Grid>
			</PaperItem>
		</Grid>
	);
}
