import { createMuiTheme } from "@material-ui/core";

export default createMuiTheme({
	palette: {
		primary: {
			main: "#fa77da",
		},
		secondary: {
			main: "#f7fefc",
		},
	},
	overrides: {
		MuiGrid: {
			item: {
				margin: "10px",
				//minHeight: "140px",
				height: "auto",
				"min-height": "100%",
				position: "relative",
			},
		},
		MuiTypography: {
			h6: {
				textDecoration: "underline",
			},
		},
	},
});
