import { Typography, Grid } from "@material-ui/core";
import IconWithText from "./IconWithText";
import ChancesTable from "./ChancesTable";
import PaperItem from "./PaperItem";

const CalculatorOutput = ({ calculatedData }) => {
	return (
		<PaperItem>
			<Typography variant="h6">Output</Typography>
			<Typography>
				<b>Normal monsters slain:</b>{" "}
				{Math.round(calculatedData.monstersSlain.normal * 10) / 10}
				<br />
				<b>Bosses slain:</b>{" "}
				{Math.round(calculatedData.monstersSlain.bosses * 10) / 10}
			</Typography>
			<ChancesTable data={calculatedData.gridOutput} />
			<Typography>
				<b>You will earn:</b>
			</Typography>
			<Grid container justify="space-between" direction="column">
				<IconWithText icon="icons/icon_gold.png" tooltip="Gold">
					Gold: <b>{calculatedData.currencyAmount.gold}</b>
				</IconWithText>
				<IconWithText icon="icons/icon_silver.png" tooltip="Silver">
					Silver: <b>{calculatedData.currencyAmount.silver}</b>
				</IconWithText>
				<IconWithText icon="icons/icon_copper.png" tooltip="Copper">
					Copper: <b>{calculatedData.currencyAmount.silver}</b>
				</IconWithText>
			</Grid>
		</PaperItem>
	);
};

export default CalculatorOutput;
