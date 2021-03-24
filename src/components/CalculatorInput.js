import React from "react";
import {
	Button,
	Checkbox,
	FormControlLabel,
	FormControl,
	FormGroup,
	Grid,
	Typography,
	InputAdornment,
} from "@material-ui/core";
import NumberInput from "./NumberInput";

import useStyles from "../styles";

const NumberInputItem = (props) => {
	return <Grid item component={NumberInput} {...props} />;
};

const CalculatorInput = ({ onSubmit }) => {
	const [willKillBosses, setState] = React.useState(false);
	const classes = useStyles();

	return (
		<div>
			<form
				onSubmit={(event) => {
					event.preventDefault();

					const target = event.target;
					onSubmit({
						goldFind: target.goldFind.value,
						quantityFind: target.quantityFind.value,
						magicFind: target.magicFind.value,
						grindTime: target.grindTime.value,
						blobKingKillSeconds: target.blobKingKillSeconds?.value,
						willKillBosses,
					});
				}}
			>
				<Grid
					container
					alignItems="center"
					justify="center"
					direction="column"
					spacing={1}
					className={classes.p16}
				>
					<Typography variant="h6">
						Insert your stats below
					</Typography>
					<NumberInputItem
						required
						name="goldFind"
						label="Gold Find"
						color="secondary"
						min={0}
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									%
								</InputAdornment>
							),
							inputProps: { min: 0 },
						}}
					/>
					<NumberInputItem
						required
						name="quantityFind"
						label="Quantity Find"
						color="secondary"
						min={40}
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									%
								</InputAdornment>
							),
							inputProps: { min: 40 },
						}}
					/>
					<NumberInputItem
						required
						name="magicFind"
						label="Magic Find"
						color="secondary"
						min={0}
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									%
								</InputAdornment>
							),
							inputProps: { min: 0 },
						}}
					/>
					<NumberInputItem
						required
						name="grindTime"
						label="Grinding duration"
						color="secondary"
						min={0}
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									min
								</InputAdornment>
							),
							inputProps: { min: 0 },
						}}
					/>
					<FormControl component="fieldset">
						<FormGroup>
							<FormControlLabel
								control={
									<Checkbox
										name="willKillBosses"
										onChange={(event) =>
											setState(event.target.checked)
										}
										color="secondary"
									/>
								}
								label="I will kill bosses"
								labelPlacement="end"
							/>
						</FormGroup>
					</FormControl>
					{willKillBosses && (
						<NumberInputItem
							name="blobKingKillSeconds"
							label="Blob King kill time (s)"
							defaultValue={30}
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										s
									</InputAdornment>
								),
								inputProps: { min: 0 },
							}}
							color="secondary"
							required
						/>
					)}
					<Grid item>
						<Button
							type="submit"
							variant="contained"
							color="primary"
						>
							Calculate
						</Button>
					</Grid>
				</Grid>
			</form>
		</div>
	);
};

export default CalculatorInput;
