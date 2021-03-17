import { Paper, Typography, Button, Checkbox } from "@material-ui/core";
import NumberInput from "./NumberInput";
import PaperItem from "./PaperItem";

// TODO: Output stuff from here instead of getting data from element ID
const CalculatorInput = ({ onSubmit }) => {
	return (
		<PaperItem>
			<Typography variant="h6">Data</Typography>
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
			<NumberInput id="wannaKillBosses" label="wannaKillBosses" />
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
		</PaperItem>
	);
};

export default CalculatorInput;
