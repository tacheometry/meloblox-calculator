import React, { useContext } from 'react';
import {
    AppBar,
    Toolbar,
    Icon,
    Typography,
    FormControlLabel,
    Switch,
    Grid
} from "@material-ui/core";
import getPublic from "../getPublic";
import { CustomThemeContext } from "./CustomThemeProvider";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    
    root: {
        background: theme.palette.background,
    },
    iconSpace: {
        marginRight: 8,
    },
    iconStyle: {
        height: "100%",
    },
    right: {
        marginLeft: "auto",
    }


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
                <Grid container alignItems="center">
                    <Grid>
                        <Grid container direction="row">
                            <Icon className={classes.iconSpace}>
                                <img
                                    src={getPublic("favicon.ico")}
                                    className={classes.iconStyle}
                                    alt="MeloBlox Calculator"
                                />
                            </Icon>
                            <Typography variant="h5">
                                MeloBlox Calculator
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid className={classes.right}>
                        <FormControlLabel
                            control={<Switch checked={isDark} onChange={handleThemeChange} />}
                            label={isDark ? "Dark Theme" : "Light Theme"}
                            color="secondary"
                        />
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}