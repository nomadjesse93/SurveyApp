import React, { Fragment, useState } from "react";
import Paper from "@material-ui/core/Paper";
import questionStyles from "./questionStyles";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import ControlPointSharp from "@material-ui/icons/ControlPointSharp";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import SaveIcon from "@material-ui/icons/Save";
import Grid from "@material-ui/core/Grid";
import Input from "../../Inputs/Input/Input";
import CustomizedMenu from "../../Buttons/Menu/Menu";
Questions.propTypes = {};

function Questions(props) {
  const [numberOfAnswers, changeNumber] = useState(3);
  const [containerHeight, changeHeight] = useState(25.5);

  const [value, setValue] = useState({
    question: "",
    questionNumber: 1,
  });

  const handleChange = (event) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  const classes = questionStyles();

  const addAnswers = () => {
    if (numberOfAnswers >= 3 && numberOfAnswers < 10)
      changeHeight(containerHeight + 3.75);
    if (numberOfAnswers < 10) changeNumber(numberOfAnswers + 1);
  };
  const removeAnswers = () => {
    if (numberOfAnswers > 3) changeHeight(containerHeight - 3.75);
    if (numberOfAnswers > 1) {
      changeNumber(numberOfAnswers - 1);
    }
  };

  const answers = () => {
    const answers = [];

    for (let i = 0; i < numberOfAnswers; i++) {
      answers.push(
        <Fragment key={i}>
          <Grid item xs={7}>
            <TextField
              label="Enter a Choice"
              id="filled-margin-dense"
              color="secondary"
              className={classes.textField}
              margin="dense"
              variant="filled"
            />
          </Grid>
          <Grid item xs={3} className={classes.addRemove}>
            <div>
              <IconButton
                color={"secondary"}
                component={"span"}
                onClick={addAnswers}
              >
                <ControlPointSharp />
              </IconButton>
              <IconButton
                color={"secondary"}
                component={"span"}
                onClick={removeAnswers}
              >
                <RemoveCircleOutlineIcon />
              </IconButton>
            </div>
          </Grid>
        </Fragment>
      );
    }

    return answers;
  };

  return (
    <Paper
      elevation={1}
      className={classes.paper}
      style={{ height: `${containerHeight}rem` }}
    >
      <Grid container justify={"center"} className={classes.container}>
        <Grid item xs={7} className={classes.question}>
          <Input
            change={handleChange}
            value={value.question}
            name="question"
            text="Write your Question"
          />
        </Grid>
        <Grid item xs={3} className={classes.menu}>
          <CustomizedMenu />
        </Grid>

        <div className={classes.line} />

        {answers()}

        <div className={classes.line} />

        <Button
          variant="contained"
          color="secondary"
          size="small"
          className={classes.save}
          startIcon={<SaveIcon />}
        >
          Save
        </Button>
      </Grid>
    </Paper>
  );
}

export default Questions;
