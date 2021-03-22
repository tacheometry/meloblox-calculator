import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	p8: {
		padding: 8,
	},
	gridPaperItem: {
		margin: 10,
		padding: 16,
	},
	imageCenter: {
		display: "block",
		marginLeft: "auto",
		marginRight: "auto",
		width: "50%",
	},
	navbar: {
		color: "white",
	},
	middleNavbarButtons: {
		position: "absolute",
		left: "50%",
		transform: "translateX(-50%)",
	},
	licenseText: {
		position: "absolute",
		width: "100%",
		textAlign: "center",
		color: "white",
		textShadow: `-1px 1px 2px #000,
					1px 1px 2px #000,
					1px -1px 0 #000,
					-1px -1px 0 #000`,
	},
}));

export default useStyles;
