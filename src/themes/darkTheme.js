import { createMuiTheme } from "@material-ui/core";

export default createMuiTheme({
    palette: {
        primary: {
            main: "#3f51b5",
            light: "#757de8",
            dark: "#002984",
        },
        secondary: {
            main: "#8c9eff",
            light: "#c0cfff",
            dark: "#5870cb",
        },
        background: {
            default: "#232323",
        },
        type: "dark"
    },
    overrides: {},
});