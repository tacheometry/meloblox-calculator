import logo from "./logo.svg";
import {
	AppBar,
	Grid,
	Paper,
	Toolbar,
	Typography,
	Button,
} from "@material-ui/core";
import "./App.css";
import { DataGrid } from "@material-ui/data-grid";
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

	const {
		goldAmount,
		silverAmount,
		copperAmount,
		chanceData,
		normalMonstersSlain,
		bossesSlain,
	} = calculate(state);

	return (
		<>
			<AppBar position="static" id="appbar">
				<Toolbar>
					<Typography variant="h5">MeloBlox Calculator</Typography>
				</Toolbar>
			</AppBar>
			<div className="container">
				<Grid container spacing={5} justify="center">
					<Grid item component={Paper} elevation={3}>
						{/* Data */}
						<Typography variant="h6">Data</Typography>
						<NumberInput id="goldFind" label="Gold Find" />
						<br />
						<NumberInput id="magicFind" label="Magic Find" />
						<br />
						<NumberInput id="grindTime" label="Grind Time" />
						<br />
						<NumberInput
							id="blobKingKillSeconds"
							label="Blob King kill seconds"
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
					<Grid item component={Paper} elevation={3} xs={6} xl={4}>
						<Typography variant="h6">Output</Typography>
						<Typography>
							<b>Normal monsters slain:</b> {normalMonstersSlain}
							<br />
							<b>Bosses slain:</b> {bossesSlain}
						</Typography>
						<OutputGrid data={chanceData} />
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
								text={goldAmount}
								tooltip="Gold"
							/>
							<IconWithText
								icon="icons/icon_silver.png"
								text={silverAmount}
								tooltip="Silver"
							/>
							<IconWithText
								icon="icons/icon_copper.png"
								text={copperAmount}
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
