import makeStyles from "@material-ui/core/styles/makeStyles";

const questionStyles = makeStyles((theme) => ({
  paper: {
    width: "40rem",
    border: "solid black 1px",
    margin: "auto",
    marginTop: "5rem",
  },
  container: {
    marginTop: "2rem",
  },
  question: {
    marginTop: "0",
    height: "5rem",
  },
  menu: {
    marginTop: "0",
    height: "5rem",
  },
  line: {
    width: "inherit",
    height: "1px",
    backgroundColor: "lightgrey",
    margin: "1rem 0 1rem 0",
  },
  textField: {
    marginLeft: theme.spacing(8),
    width: "45ch",
  },
  addRemove: {
    marginLeft: "6rem",
  },
  save: {},
}));

export default questionStyles;
