import { Typography, Grid, Tabs, Tab, Box } from "@material-ui/core";
import IconWithText from "./IconWithText";
import ChancesTable from "./ChancesTable";
import QuantityTable from "./QuantityTable";
import PaperItem from "./PaperItem";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import PropTypes from "prop-types";

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
	mt8: {
		marginTop: 8,
	},
	paper: {
		background: theme.palette.background.main,
	},
}));

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`scrollable-force-tabpanel-${index}`}
			aria-labelledby={`scrollable-force-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}
TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};
function a11yProps(index) {
	return {
		id: `vertical-tab-${index}`,
		"aria-controls": `vertical-tabpanel-${index}`,
	};
}

const CalculatorOutput = ({ calculatedData }) => {
	const classes = useStyles();
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<PaperItem className={`${classes.p16} ${classes.paper} `}>
			<Tabs
				orientation="horizontal"
				value={value}
				onChange={handleChange}
				aria-label="Vertical tabs example"
				indicatorColor="primary"
				centered
			>
				<Tab label="Rarity Chances" {...a11yProps(0)} />
				<Tab label="Quantity Details" {...a11yProps(1)} />
			</Tabs>
			<Typography className={`${classes.p8}`}>
				Normal monsters slain:{" "}
				<b>{Math.ceil(calculatedData.monstersSlain.normal)}</b>
				<br />
				Bosses slain:{" "}
				<b>{Math.ceil(calculatedData.monstersSlain.bosses)}</b>
			</Typography>
			<TabPanel value={value} index={0}>
				<Typography variant="caption" className={classes.p16}>
					<i>Quantity Find % does not effect the Rarity Table</i>
				</Typography>
				<ChancesTable
					data={calculatedData.chancesOutput}
					className={classes.mt8}
				/>
				<Grid
					container
					justify="space-between"
					direction="row"
					className={`${classes.p8}`}
				>
					<Typography>You will earn:</Typography>
					<IconWithText icon="icons/icon_gold.png" tooltip="Gold">
						<b>{calculatedData.currencyAmount.gold}</b>
					</IconWithText>
					<IconWithText icon="icons/icon_silver.png" tooltip="Silver">
						<b>{calculatedData.currencyAmount.silver}</b>
					</IconWithText>
					<IconWithText icon="icons/icon_copper.png" tooltip="Copper">
						<b>{calculatedData.currencyAmount.copper}</b>
					</IconWithText>
				</Grid>
			</TabPanel>
			<TabPanel value={value} index={1}>
				<QuantityTable
					data={calculatedData.quantitiesOutput}
					className={classes.mt8}
				/>
			</TabPanel>
		</PaperItem>
	);
};

export default CalculatorOutput;
