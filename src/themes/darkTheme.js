import { createMuiTheme } from "@material-ui/core";

export default createMuiTheme({
	palette: {
		primary: {
			/* And to be fair, I loved the blue one */
			main: "#ec407a",
			light: "#ec407a",
			dark: "#b4004e",
		},
		/*secondary: {
			main: "#40ecb3",
			light: "#8e99f3",
			dark: "#26418f",
		},*/
		secondary: {
			main: "#f48fb1",
			light: "#ffffff",
			dark: "#aeaeae",
		},
		info: {
			main: "#ececec",
			light: "#ececec",
			dark: "#ececec",
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
	overrides: {
		MuiPaper: {
			root: {
				/* overrides the default ugly dark color */
				backgroundColor: "#333",
			},
		},
	},
});
