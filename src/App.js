import { Grid } from "@material-ui/core";
import "./App.css";
import { useState } from "react";
import calculate from "./calculator";
import CalculatorInput from "./components/CalculatorInput";
import CalculatorOutput from "./components/CalculatorOutput";

function App() {
	const [state, setState] = useState({
		goldFind: 0,
		magicFind: 0,
		grindTime: 0,
		blobKingKillSeconds: 0,
		wannaKillBosses: 0,
	});

	const onSubmit = (data) => {
		setState({
			goldFind: data.goldFind?.value,
			magicFind: data.magicFind?.value,
			grindTime: data.grindTime?.value,
			blobKingKillSeconds: data.blobKingKillSeconds?.value,
			wannaKillBosses: data.wannaKillBosses?.value,
		});
	};

	const calculatedData = calculate(state);

	return (
		<div className="container">
			<Grid container spacing={5} justify="center">
				<Grid item>
					<CalculatorInput onSubmit={onSubmit} />
				</Grid>
				<Grid item xs={6} xl={3}>
					<CalculatorOutput calculatedData={calculatedData} />
				</Grid>
			</Grid>
		</div>
	);
}

export default App;
