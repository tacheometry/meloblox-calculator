import { TextField } from "@material-ui/core";

function NumberInput(props) {
	return (
		<TextField color="primary" fullWidth={true} type="number" {...props} />
	);
}

export default NumberInput;
