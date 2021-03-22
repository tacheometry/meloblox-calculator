import { createMuiTheme } from "@material-ui/core";

const useStyles = createMuiTheme({
	palette: {
		primary: {
			main: "#ec407a",
			light: "#ec407a",
			dark: "#b4004e",
		},
		secondary: {
			main: "#40ecb3",
			light: "#ff94c2",
			dark: "#ba2d65",
		},
		background: {
			default: "#ececec",
			main: "#fff",
			contrastText: "#fff",
		},
		type: "light",
	},
	overrides: {},
});

export default useStyles;
