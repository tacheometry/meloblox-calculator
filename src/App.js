import { Grid } from "@material-ui/core";
import "./App.css";
import { useState } from "react";
import calculate from "./services/calculator";
import CalculatorInput from "./components/CalculatorInput";
import CalculatorOutput from "./components/CalculatorOutput";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	spacing: {
		margin: 16
	}
}));

function App() {
	const [state, setState] = useState({
		goldFind: 0,
		magicFind: 0,
		grindTime: 0,
		blobKingKillSeconds: 0,
		willKillBosses: false,
	});

	const onSubmit = (data) => {
		setState(data);
	};

	const calculatedData = calculate(state);
	
	const classes = useStyles();

	return (
		<Grid container justify="center">
			<Grid item lg={2} className={classes.spacing}>
				<CalculatorInput onSubmit={onSubmit} />
			</Grid>
			<Grid item lg={5} md={7} sm className={classes.spacing}>
				<CalculatorOutput calculatedData={calculatedData} />
			</Grid>
		</Grid>
	);
}

export default App;
