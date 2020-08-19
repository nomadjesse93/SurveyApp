import React from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import {useSelector} from "react-redux";
import {name} from "../Login/LoginSlice";
import {firstName} from "../Register/RegisterSlice";
import dashBoardStyles from "./dashBoardStyles";

const DashBoard = () => {
    const userName = useSelector(name);
    const newUserName = useSelector(firstName)

    const classes = dashBoardStyles();
    return (
        <div>
            <Grid container>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography variant={"h4"} className={classes.welcome}>Welcome, {userName ? userName : newUserName ? newUserName: "Guest"}!</Typography>
                    </Paper>
                </Grid>

            </Grid>

        </div>
    );
};

export default DashBoard;
