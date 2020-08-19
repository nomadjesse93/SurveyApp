import React from "react";
import { theme } from "./AppTheme";
import { ThemeProvider } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { appStyles } from "./AppStyles";
import { Provider } from "react-redux";
import store from "./store";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import Login from "../Login/Login";
import Register from "../Register/Register";
import CreateSurvey from "../CreateSurvey/CreateSurvey";
import Header from "../Header/Header";
import Landing from "../Landing/Landing";
import Questions from "../CreateSurvey/Questions/Questions";

const history = createBrowserHistory({
  basename: "/",
});

function App() {
  const classes = appStyles();

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <Router history={history}>
            <Switch>
              <Header className={classes.dashBoard}>
                <Route exact path={"/login"}>
                  <Grid container spacing={3}>
                    <Grid item xs={8} className={classes.login}>
                      <Login />
                    </Grid>
                  </Grid>
                </Route>
                <Route exact path={"/"}>
                  <Grid container spacing={3}>
                    <Grid item xs={8} className={classes.login}>
                      <Landing />
                    </Grid>
                  </Grid>
                </Route>

                <Route exact path={"/register"}>
                  <Grid container spacing={3}>
                    <Grid item xs={8} className={classes.register}>
                      <Questions />
                    </Grid>
                  </Grid>
                </Route>

                <Route exact path={"/createSurvey"}>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <CreateSurvey />
                    </Grid>
                  </Grid>
                </Route>
              </Header>
            </Switch>
          </Router>
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
