import {
	Button,
	Checkbox,
	FormControlLabel,
	FormControl,
	FormGroup,
	Grid,
} from "@material-ui/core";
import NumberInput from "./NumberInput";
import PaperItem from "./PaperItem";
import { useState } from "react";

// TODO: Output stuff from here instead of getting data from element ID

const NumberInputItem = (props) => {
	return (
		<Grid item>
			<NumberInput {...props} />
		</Grid>
	);
};

const CalculatorInput = ({ onSubmit }) => {
	const [willKillBosses, setState] = useState(false);

	return (
		<PaperItem>
			<form
				onSubmit={(event) => {
					event.preventDefault();

					onSubmit({
						...event.target,
						willKillBosses,
					});
				}}
			>
				<Grid
					container
					alignItems="center"
					justify="center"
					direction="column"
					spacing={0}
				>
					<NumberInputItem
						required
						name="goldFind"
						label="Gold Find (%)"
					/>
					<NumberInputItem
						require
						name="magicFind"
						label="Magic Find (%)"
					/>
					<NumberInputItem
						required
						name="grindTime"
						label="Grinding duration (min)"
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
										color="primary"
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
							color="primary"
							style={{ width: "100%", color: "white" }}
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
