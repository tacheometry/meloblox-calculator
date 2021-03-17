import {
	AppBar,
	Grid,
	Paper,
	Toolbar,
	Typography,
	Button,
	Icon,
	Checkbox,
} from "@material-ui/core";
import "./App.css";
import NumberInput from "./components/NumberInput";
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

	const onSubmit = () => {
		setState({
			goldFind: document.getElementById("goldFind").value,
			magicFind: document.getElementById("magicFind").value,
			grindTime: document.getElementById("grindTime").value,
			blobKingKillSeconds: document.getElementById("blobKingKillSeconds")
				.value,
			wannaKillBosses: document.getElementById("wannaKillBosses").value,
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
