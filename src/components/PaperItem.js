import { Paper } from "@material-ui/core";

const PaperItem = ({ children, ...others }) => {
	return (
		<Paper
			style={{ padding: "15px" }}
			elevation={3}
			children={children}
			{...others}
		/>
	);
};

export default PaperItem;
