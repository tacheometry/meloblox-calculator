import {
	AppBar,
	Grid,
	Paper,
	Toolbar,
	Typography,
	Button,
	Icon,
} from "@material-ui/core";
import "./App.css";
import OutputGrid from "./OutputGrid";
import IconWithText from "./IconWithText";
import NumberInput from "./NumberInput";
import { useState } from "react";
import calculate from "./calculator";

function App() {
	const [state, setState] = useState({
		goldFind: 0,
		magicFind: 0,
		grindTime: 0,
		blobKingKillSeconds: 0,
	});

	const onSubmit = () => {
		setState({
			goldFind: document.getElementById("goldFind").value,
			magicFind: document.getElementById("magicFind").value,
			grindTime: document.getElementById("grindTime").value,
			blobKingKillSeconds: document.getElementById("blobKingKillSeconds")
				.value,
		});
	};

	const calculatedData = calculate(state);

	return (
		<>
			<AppBar position="static" id="appbar">
				<Toolbar>
					<Icon>
						<img
							src="favicon.ico"
							style={{ width: "100%", height: "100%" }}
						/>
					</Icon>
					<Typography variant="h5">MeloBlox Calculator</Typography>
				</Toolbar>
			</AppBar>
			<div className="container">
				<Grid container spacing={5} justify="center">
					<Grid item component={Paper} elevation={3}>
						{/* Data */}
						<Typography variant="h6">Data</Typography>
						<NumberInput id="goldFind" label="Gold Find (%)" />
						<br />
						<NumberInput id="magicFind" label="Magic Find (%)" />
						<br />
						<NumberInput id="grindTime" label="Grind Time (min)" />
						<br />
						<NumberInput
							id="blobKingKillSeconds"
							label="Blob King kill time (s)"
						/>
						<br />
						<Button
							variant="contained"
							style={{
								marginTop: "10px",
								width: "100%",
								color: "white",
							}}
							color="primary"
							onClick={onSubmit}
						>
							Calculate
						</Button>
					</Grid>

					{/* Output */}
					<Grid item component={Paper} elevation={3} xs={6} xl={3}>
						<Typography variant="h6">Output</Typography>
						<Typography>
							<b>Normal monsters slain:</b>{" "}
							{Math.ceil(calculatedData.monstersSlain.normal)}
							<br />
							<b>Bosses slain:</b>{" "}
							{Math.ceil(calculatedData.monstersSlain.bosses)}
						</Typography>
						<OutputGrid data={calculatedData.gridOutput} />
						<Typography>
							<b>You will earn:</b>
						</Typography>
						<Grid
							container
							justify="space-between"
							direction="column"
						>
							<IconWithText
								icon="icons/icon_gold.png"
								text={calculatedData.currencyAmount.gold}
								tooltip="Gold"
							/>
							<IconWithText
								icon="icons/icon_silver.png"
								text={calculatedData.currencyAmount.silver}
								tooltip="Silver"
							/>
							<IconWithText
								icon="icons/icon_copper.png"
								text={calculatedData.currencyAmount.copper}
								tooltip="Copper"
							/>
						</Grid>
					</Grid>
				</Grid>
			</div>
		</>
	);
}

export default App;
