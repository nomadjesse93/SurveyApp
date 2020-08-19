import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import CustomizedMenu from "../Buttons/Menu/Menu";
import Questions from "./Questions/Questions";

import { surveyStyles } from "./surveyStyles";

const CreateSurvey = () => {
  const classes = surveyStyles();

  return (
    <Grid container spacing={3} className={classes.root}>
      <Grid item xs={12} className={classes.subHeading}>
        <Paper>SubHeading</Paper>
      </Grid>

      <Grid item xs={2} className={classes.sidebar}>
        <Paper>
          <Button>New Survey</Button>
        </Paper>
      </Grid>

      <Grid
        item
        xs={10}
        container
        justify={"center"}
        alignItems={"center"}
        className={classes.main}
      >
        <Questions />
      </Grid>
    </Grid>
  );
};

export default CreateSurvey;
