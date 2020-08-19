import React, {useState} from 'react';
import {err, isAuth, submitLogin} from "./LoginSlice";
import {Redirect, Link} from 'react-router-dom';
//import {createBrowserHistory} from "history";
import {useDispatch, useSelector} from "react-redux";
import Grid from "@material-ui/core/Grid";
import Input from "../Inputs/Input/Input";
import {styles} from "./loginStyles";

const Login = () => {
    const classes = styles();
    const dispatch = useDispatch();
    const errors = useSelector(err);
 //   const authorized = useSelector(isAuth);
  // const history = createBrowserHistory();

    const [value, setValue] = useState({
        email:'',
        password:'',
        passFieldType:'password'
    });




    const handleChange = (event) => {
        setValue({...value,[event.target.name ]:event.target.value})
    }

    const handleClickShowPassword = () => {
        setValue({ ...value, showPassword: !value.showPassword });
    };




    const onLogin = () => {
        dispatch(submitLogin(value.email, value.password))
      if( isAuth ) {
          return <Redirect to={'/'}/>;
      }
    }





    return (
        <Grid container justify="center" className={classes.container}>
            <Grid item className={classes.email}>
<Input text='Email' value={value.email} change={handleChange} name='email'/>
            </Grid>
            <Grid item className={classes.password}>
                <Input text='Password' value={value.password} change={handleChange} name='password'/>
            </Grid>
        </Grid>

    );
};

export default Login;
