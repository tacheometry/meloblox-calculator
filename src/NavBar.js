import React, { useContext } from 'react';
import {
	AppBar,
	Toolbar,
	Icon,
	Typography,
	FormControlLabel,
	Switch
} from "@material-ui/core";
import getPublic from "./getPublic";
import { CustomThemeContext } from "./components/CustomThemeProvider";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    
    root: {
        display: 'flex',
        justifyContent: "space-between",
        background: theme.palette.background,
    },


    /* May be useful ?
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    title: {
      flexGrow: 1,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: 'auto',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },*/
  }))



export default function NavBar() {
    const classes = useStyles();
    const { currentTheme, setTheme } = useContext(CustomThemeContext);
    const isDark = Boolean(currentTheme === 'darkTheme');

    const handleThemeChange = (event) => {
        const { checked } = event.target
        if (checked) {
            setTheme('darkTheme')
        } else {
            setTheme('defaultTheme')
        }
    }
    
    return (
        <AppBar position="static" id="appbar" className={{ root: classes.root }}>
            <Toolbar>
                <Icon>
                    <img
                        src={getPublic("favicon.ico")}
                        style={{ width: "100%", height: "100%" }}
                        alt="MeloBlox Calculator"
                    />
                    {" "}
                </Icon>
                <Typography variant="h5">
                    MeloBlox Calculator
                </Typography>
                <FormControlLabel
                    control={<Switch checked={isDark} onChange={handleThemeChange} />}
                    label={isDark ? "Dark Theme" : "Light Theme"}
                    color="secondary"
                />
            </Toolbar>
        </AppBar>
    );
}