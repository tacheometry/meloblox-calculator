import {
	Paper,
	Typography,
	Button,
	Checkbox,
	FormControlLabel,
	FormControl,
	FormGroup,
	FormLabel,
	Grid,
} from "@material-ui/core";
import NumberInput from "./NumberInput";
import PaperItem from "./PaperItem";
import { useState } from "react";

// TODO: Output stuff from here instead of getting data from element ID

const NumberInputItem = ({ children, ...properties }) => {
	return (
		<Grid item>
			<NumberInput children={children} {...properties} />
		</Grid>
	);
};

const CalculatorInput = ({ onSubmit }) => {
	const [willKillBosses, setState] = useState(false);

	return (
		<PaperItem>
			{/* <Typography variant="h6">Data</Typography>
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
			<FormControlLabel
				value="end"
				control={<Checkbox color="primary" />}
				label="End"
				labelPlacement="end"
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
			</Button> */}
			<form
				onSubmit={(event) => {
					event.preventDefault();

					onSubmit(event.target);
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
						<FormGroup name="wannaKillBosses">
							<FormControlLabel
								control={
									<Checkbox
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
							name="blodKingKillSeconds"
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
