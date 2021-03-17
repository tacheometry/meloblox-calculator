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
		willKillBosses: false,
	});

	const onSubmit = (data) => {
		setState({
			goldFind: data.goldFind?.value,
			magicFind: data.magicFind?.value,
			grindTime: data.grindTime?.value,
			blobKingKillSeconds: data.blobKingKillSeconds?.value,
			willKillBosses: data.willKillBosses,
		});
	};

	const calculatedData = calculate(state);

	return (
		<div
			className="container"
			style={{
				margin: "12px auto",
				position: "absolute",
				left: 0,
				right: 0,
			}}
		>
			<Grid container spacing={3} justify="center">
				<Grid item>
					<CalculatorInput onSubmit={onSubmit} />
				</Grid>
				<Grid item xs style={{ maxWidth: "1000px" }}>
					<CalculatorOutput calculatedData={calculatedData} />
				</Grid>
			</Grid>
		</div>
	);
}

export default App;
