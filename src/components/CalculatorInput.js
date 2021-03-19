import {
	Button,
	Checkbox,
	FormControlLabel,
	FormControl,
	FormGroup,
	Grid,
	Typography
} from "@material-ui/core";
import NumberInput from "./NumberInput";
import PaperItem from "./PaperItem";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

// TODO: Output stuff from here instead of getting data from element ID

const useStyles = makeStyles((theme) => ({
	p8: {
		padding: 8,
	},
	submitButton: {
		width: "100%",
		color: "white",
		marginTop: 16,
		marginBottom: 4,
	},
	p16: {
		padding: 16,
	}
}));

const NumberInputItem = (props) => {
	return (
		<Grid item>
			<NumberInput {...props} />
		</Grid>
	);
};

const CalculatorInput = ({ onSubmit }) => {
	const [willKillBosses, setState] = useState(false);
	const classes = useStyles();

	return (
		<PaperItem className={classes.p8}>
			<form
				onSubmit={(event) => {
					event.preventDefault();

					const target = event.target;
					if(willKillBosses) {
						onSubmit({
							goldFind: target.goldFind.value,
							quantityFind: target.quantityFind.value,
							magicFind: target.magicFind.value,
							grindTime: target.grindTime.value,
							blobKingKillSeconds: target.blobKingKillSeconds.value,
							willKillBosses,
						});
					} else {
						onSubmit({
							goldFind: target.goldFind.value,
							quantityFind: target.quantityFind.value,
							magicFind: target.magicFind.value,
							grindTime: target.grindTime.value,
							willKillBosses,
						});
					}
					
				}}
			>
				<Grid
					container
					alignItems="center"
					justify="center"
					direction="column"
					spacing={0}
					className={classes.p8}
				>
					<Typography variant="h6">Insert your stats below</Typography>
					<NumberInputItem
						required
						name="goldFind"
						label="Gold Find (%)"
						color="secondary"
					/>
					<NumberInputItem
						required
						name="quantityFind"
						//label="Quantity Find (%)"
						label="Not yet working!"
						error={true}
						disabled={true}
					/>
					<NumberInputItem
						required
						name="magicFind"
						label="Magic Find (%)"
						color="secondary"
					/>
					<NumberInputItem
						required
						name="grindTime"
						label="Grinding duration (min)"
						color="secondary"
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
							required
						/>
					)}
					<Grid item>
						<Button
							type="submit"
							variant="contained"
							color="secondary"
							className={classes.submitButton}
						>
							Calculate
						</Button>
					</Grid>
				</Grid>
			</form>
		</PaperItem>
	);
};

export default CalculatorInput;
