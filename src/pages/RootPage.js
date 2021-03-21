import { useState } from "react";

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import CalculatorInput from "../components/CalculatorInput";
import CalculatorOutput from "../components/CalculatorOutput";

import calculate from "../services/calculator";

export default function RootPage() {
	const [state, setState] = useState({
		goldFind: 0,
		magicFind: 0,
		quantityFind: 0,
		grindTime: 0,
		blobKingKillSeconds: 0,
		willKillBosses: false,
	});

	const calculatedData = calculate(state);

	const classes = makeStyles((theme) => ({
		spacing: {
			margin: 16,
		},
	}));

	return (
		<Grid container justify="center">
			<Grid item lg={2} className={classes().spacing}>
				<CalculatorInput onSubmit={setState} />
			</Grid>
			<Grid item lg={5} md={7} sm className={classes().spacing}>
				<CalculatorOutput calculatedData={calculatedData} />
			</Grid>
		</Grid>
	);
}
