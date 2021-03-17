import { TextField } from "@material-ui/core";

function NumberInput(props) {
	return <TextField type="number" min={0} {...props} />;
}

export default NumberInput;
