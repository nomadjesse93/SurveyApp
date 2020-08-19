import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import headerStyles from "./headerStyles";
import {useSelector} from "react-redux";
import {isAuth} from '../Login/LoginSlice'
import LoggedIn from "./HeaderLinks/LoggedIn";
import NotLoggedIn from "./HeaderLinks/NotLoggedIn";


const Header = (props) => {
    const classes = headerStyles();
    const auth = useSelector(isAuth);




const menu = auth ?  <NotLoggedIn classes={classes}/> : <LoggedIn classes={classes}/>;


    return (
<div className={classes.root}>
    <Grid container spacing={3} className={classes.gridContainer}>
        <Grid item xs={12} className={classes.header}>
            <Paper className={classes.imgDiv}>
                <img src={require('../../img/Logo.png')} alt={'Oops! Something Broke'} className={classes.img}/>
            </Paper>
            {menu}
        </Grid>
        {props.children}
    </Grid>
</div>

    );
};

export default Header;
