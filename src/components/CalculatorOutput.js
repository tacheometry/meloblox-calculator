import React from "react";
import { Typography, Grid, Tabs, Tab, Box, Paper } from "@material-ui/core";
import IconWithText from "./IconWithText";
import ChancesTable from "./ChancesTable";
import QuantityTable from "./QuantityTable";

import useStyles from "../styles";

const noNaN = (x) => {
	if (isNaN(x)) return 0;
	return x;
};

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`wrapped-tabpanel-${index}`}
			aria-labelledby={`wrapped-tab-${index}`}
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

function a11yProps(index) {
	return {
		id: `wrapped-tab-${index}`,
		"aria-controls": `wrapped-tabpanel-${index}`,
	};
}

const CalculatorOutput = ({ calculatedData }) => {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div>
			<Tabs
				orientation="horizontal"
				value={value}
				onChange={handleChange}
				indicatorColor="primary"
				centered
			>
				<Tab label="Rarity Chances" {...a11yProps(0)} />
				{/* <Tab label="Quantity Details" {...a11yProps(1)} /> */}
			</Tabs>
			<Typography>
				Normal monsters slain:{" "}
				<b>{Math.ceil(calculatedData.monstersSlain.normal)}</b>
				<br />
				Bosses slain:{" "}
				<b>{Math.ceil(calculatedData.monstersSlain.bosses)}</b>
			</Typography>
			<TabPanel value={value} index={0}>
				<Typography variant="caption">
					<i>Quantity Find % does not effect the Rarity Table</i>
				</Typography>
				<ChancesTable data={calculatedData.chancesOutput} />
				<Grid container justify="space-between" direction="row">
					<Typography>You will earn:</Typography>
					<IconWithText icon="icons/icon_gold.png" tooltip="Gold">
						<b>{noNaN(calculatedData.currencyAmount.gold)}</b>
					</IconWithText>
					<IconWithText icon="icons/icon_silver.png" tooltip="Silver">
						<b>{noNaN(calculatedData.currencyAmount.silver)}</b>
					</IconWithText>
					<IconWithText icon="icons/icon_copper.png" tooltip="Copper">
						<b>{noNaN(calculatedData.currencyAmount.copper)}</b>
					</IconWithText>
				</Grid>
			</TabPanel>
			{/* <TabPanel value={value} index={1}>
				<QuantityTable data={calculatedData.quantitiesOutput} />
			</TabPanel> */}
		</div>
	);
};

export default CalculatorOutput;
