import { createMuiTheme } from "@material-ui/core";

export default createMuiTheme({
	palette: {
		primary: {
			main: "#ec407a",
			light: "#ec407a",
			dark: "#b4004e",
		},
		secondary: {
			main: "#40ecb3",
			light: "#8e99f3",
			dark: "#26418f",
		},
		background: {
			default: "#1b1b1b",
			main: "#333",
			contrastText: "#fff",
		},
		type: "dark",
	},
	props: {
		MuiPaper: {
			elevation: 3,
		},
	},
	overrides: {},
});
