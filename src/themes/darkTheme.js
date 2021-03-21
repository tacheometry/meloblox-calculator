import { createMuiTheme } from "@material-ui/core";

export default createMuiTheme({
	palette: {
		primary: {
			main: "#ec407a",
			light: "#757de8",
			dark: "#002984",
		},
		secondary: {
			main: "#5c6bc0",
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
	overrides: {},
});
