import { Typography, Grid } from "@material-ui/core";
import IconWithText from "./IconWithText";
import ChancesTable from "./ChancesTable";
import PaperItem from "./PaperItem";

const CalculatorOutput = ({ calculatedData }) => {
	return (
		<PaperItem>
			<Typography variant="h6">Output</Typography>
			<Typography style={{ paddingTop: 8, paddingBottom: 16 }}>
				<b>Normal monsters slain:</b>{" "}
				{Math.ceil(calculatedData.monstersSlain.normal)}
				<br />
				<b>Bosses slain:</b>{" "}
				{Math.ceil(calculatedData.monstersSlain.bosses)}
			</Typography>
			<ChancesTable data={calculatedData.gridOutput} />
			<Grid
				container
				justify="space-between"
				direction="row"
				style={{ padding: 8, paddingTop: 16 }}
			>
				<Typography>
					<b>You will earn:</b>
				</Typography>
				<IconWithText icon="icons/icon_gold.png" tooltip="Gold">
					Gold: <b>{calculatedData.currencyAmount.gold}</b>
				</IconWithText>
				<IconWithText icon="icons/icon_silver.png" tooltip="Silver">
					Silver: <b>{calculatedData.currencyAmount.silver}</b>
				</IconWithText>
				<IconWithText icon="icons/icon_copper.png" tooltip="Copper">
					Copper: <b>{calculatedData.currencyAmount.copper}</b>
				</IconWithText>
			</Grid>
		</PaperItem>
	);
};

export default CalculatorOutput;
