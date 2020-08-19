import React, {useState} from 'react';
import {FormControl, Grid, Input, InputAdornment, InputLabel, Paper, Typography} from "@material-ui/core";
import {AccountCircle, Visibility, VisibilityOff} from "@material-ui/icons";
import {registerStyles, StyledIconButton} from "./RegisterStyles";
import {useDispatch,useSelector} from "react-redux";
import {submitInfo} from './RegisterSlice';
import {isRegistered} from "./RegisterSlice";
import {Redirect} from 'react-router-dom';

const Register = (props) => {
const classes = registerStyles();
const dispatch = useDispatch();
const registered= useSelector(isRegistered)

const [value, setValue] = useState({
    email:'',
    password:'',
    reEnteredPassword:'',
    first_Name:'',
    last_Name:'',
    showPassword: false,
    showReEnter: false,
    passwordsMatch:true
});


const handleChange = (event) => {
    setValue({...value,[event.target.name ]:event.target.value})
}

const handleClickShowPassword = () => {
    setValue({ ...value, showPassword: !value.showPassword });
};

    const handleClickShowRePassword = () => {
        setValue({ ...value, showReEnter: !value.showReEnter });
    };


const onSubmit = () => {
    if(value.password !== value.reEnteredPassword){
     return   setValue({...value, passwordsMatch: false});
    }
    dispatch(submitInfo(value.first_Name, value.last_Name, value.email, value.password));
}

if(registered){
return <Redirect to={'/'}/>
}

    return (
        <div>
            <Paper className={classes.root}>
                <Grid container spacing={2} className={classes.gridContainer}>
                    <Grid item xs={6} className={classes.gridItem}>
                        <Typography variant="h4">Surveyor</Typography>
                    </Grid>
                    <Grid item xs={8} className={classes.gridItem}>
                        <FormControl>
                            <InputLabel htmlFor="input-with-icon-adornment" className={classes.label}>First Name</InputLabel>
                            <Input
                                className={classes.input}
                                id="input-with-icon-adornment"
                                startAdornment={
                                    <InputAdornment position="start">
                                        <AccountCircle />
                                    </InputAdornment>
                                }
                                name='first_Name'
                                value={value.first_Name}
                                onChange={handleChange}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={8} className={classes.gridItem}>
                        <FormControl>
                            <InputLabel htmlFor="input-with-icon-adornment" className={classes.label}>Last Name</InputLabel>
                            <Input
                                className={classes.input}
                                id="input-with-icon-adornment"
                                startAdornment={
                                    <InputAdornment position="start">
                                        <AccountCircle />
                                    </InputAdornment>
                                }
                                name='last_Name'
                                value={value.last_Name}
                                onChange={handleChange}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={8} className={classes.gridItem}>
                        <FormControl>
                            <InputLabel htmlFor="input-with-icon-adornment" className={classes.label}>Email</InputLabel>
                            <Input
                                className={classes.input}
                                id="input-with-icon-adornment"
                                startAdornment={
                                    <InputAdornment position="start">
                                        <AccountCircle />
                                    </InputAdornment>
                                }
                                name='email'
                                value={value.email}
                                onChange={handleChange}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={8} className={classes.gridItem}>
                        <FormControl>
                            <InputLabel htmlFor="standard-adornment-password" className={classes.label}>Password</InputLabel>
                            <Input
                                className={classes.input}
                                id="standard-adornment-password"
                                type={value.showPassword ? 'text' : 'password'}
                                name='password'
                                value={value.password}
                                onChange={handleChange}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <StyledIconButton
                                            edge={'start'}
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                        >
                                            {value.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </StyledIconButton>
                                    </InputAdornment>
                                }
                            />
                            <Typography hidden={value.passwordsMatch} className={classes.error}>Passwords do not match!</Typography>
                        </FormControl>
                    </Grid>
                    <Grid item xs={8} className={classes.gridItem}>
                        <FormControl>
                            <InputLabel htmlFor="standard-adornment-password" className={classes.label} color='secondary'>Re-Enter Password</InputLabel>
                            <Input
                                className={classes.input}
                                id="standard-adornment-password"
                                type={value.showReEnter ? 'text' : 'password'}
                                name='reEnteredPassword'
                                value={value.reEnteredPassword}
                                onChange={handleChange}
                                color='secondary'
                                startAdornment={
                                    <InputAdornment position="start">
                                        <StyledIconButton
                                            edge={'start'}
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowRePassword}
                                        >
                                            {value.showReEnter ? <Visibility /> : <VisibilityOff />}
                                        </StyledIconButton>
                                    </InputAdornment>
                                }
                            />
                            <Typography hidden={value.passwordsMatch} className={classes.error}>Passwords do not match!</Typography>
                        </FormControl>
                    </Grid>
                    <Grid item xs={8} className={classes.gridItem}>
                    </Grid>

                </Grid>
            </Paper>
        </div>

)};

export default Register;