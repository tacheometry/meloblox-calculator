import React from "react";

import { Grid, Paper } from "@material-ui/core";

import CalculatorInput from "../components/CalculatorInput";
import CalculatorOutput from "../components/CalculatorOutput";

import calculate from "../services/calculator";

import useStyles from "../styles";

export default function CalculatorPage() {
	const [state, setState] = React.useState({
		goldFind: 0,
		magicFind: 0,
		quantityFind: 0,
		grindTime: 0,
		blobKingKillSeconds: 0,
		willKillBosses: false,
		applyQFtoChances: false,
	});

	const calculatedData = calculate(state);
	const classes = useStyles();

	return (
		<Grid container justify="center" className={classes.mt8}>
			<Grid
				item
				lg={2}
				component={Paper}
				className={`${classes.m8} ${classes.p16}`}
			>
				<CalculatorInput onSubmit={setState} />
			</Grid>
			<Grid
				item
				lg={5}
				md={7}
				sm
				component={Paper}
				className={`${classes.m8} ${classes.p16}`}
			>
				<CalculatorOutput
					calculatedData={calculatedData}
					experimentalMode={state.applyQFtoChances}
				/>
			</Grid>
		</Grid>
	);
}
