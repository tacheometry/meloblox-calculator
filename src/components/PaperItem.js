import { Paper } from "@material-ui/core";

const PaperItem = (props) => {
	return <Paper style={{ padding: 16 }} elevation={3} {...props} />;
};

export default PaperItem;
