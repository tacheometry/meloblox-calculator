import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	p8: {
		padding: 8,
	},
	p16: {
		padding: 16,
	},
	m8: {
		margin: 8,
	},
	m16: {
		margin: 16,
	},
	mt16: {
		marginTop: 16,
	},
	mtb16: {
		marginTop: 16,
		marginBottom: 16,
	},
	ptb16: {
		paddingTop: 16,
		paddingBottom: 16,
	},

	/*gridPaperItem: {
		margin: 10,
		padding: 16,
	},*/
	imageCenter: {
		display: "block",
		marginLeft: "auto",
		marginRight: "auto",
		width: "50%",
	},
	navbar: {
		color: theme.palette.background.contrastText,
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
		color: theme.palette.secondary.main,
		/*textShadow: `-1px 1px 2px #000,
					1px 1px 2px #000,
					1px -1px 0 #000,
					-1px -1px 0 #000`,*/
	},
}));

export default useStyles;
