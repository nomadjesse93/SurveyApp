import React from 'react';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {landingStyles} from './LandingStyles'
import {Link} from 'react-router-dom';

function Landing(props) {
    const classes = landingStyles();


    return (
<div className={classes.root}>

<Grid container className={classes.container} >
    <Grid item>
        <Typography variant={"h2"} className={classes.title}>Ask the right questions</Typography>
        <Typography variant={"subtitle1"} className={classes.subtitle}>A not so subtle clone of SurveyMonkey</Typography>
    </Grid>
   <Grid item  xs={12} style={{textAlign:'center'}}>
<Link to={"/register"}>
    <Button variant='contained' className={classes.button}  >
        Get Started
    </Button>
</Link>

   </Grid>
        </Grid>

</div>
    );
}

export default Landing;