import { Paper } from "@material-ui/core";

const PaperItem = (props) => {
	return <Paper elevation={3} {...props} style={{ margin: 3 }} />;
};

export default PaperItem;
