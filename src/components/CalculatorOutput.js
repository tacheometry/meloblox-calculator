import { Typography, Grid } from "@material-ui/core";
import IconWithText from "./IconWithText";
import ChancesTable from "./ChancesTable";
import PaperItem from "./PaperItem";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	pt16: {
		paddingTop: 16,
	},
	p8: {
		padding: 8,
	},
	p16: {
		padding: 16,
	},
	paper: {
		background: theme.palette.background.main,
	},
}));

const CalculatorOutput = ({ calculatedData }) => {
	const classes = useStyles();

	return (
		<PaperItem className={ `${classes.p16} ${classes.paper} `}>
			<Typography variant="h6">Output</Typography>
			<Typography className={ `${classes.pt16} ${classes.p8}` }>
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
				className={ `${classes.pt16} ${classes.p8}` }
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
