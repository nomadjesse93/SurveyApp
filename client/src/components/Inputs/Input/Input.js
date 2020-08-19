import React from 'react';
import TextField from "@material-ui/core/TextField";
import {styles} from "./styles";


function Input(props) {
    const classes = styles();

    return (
                <TextField
                    required
                    name={props.name}
                    onChange={props.change}
                    value={props.value}
                    className={classes.margin}
                    id="standard-required"
                    fullWidth
                    label={props.text}
                    color='secondary'
                    InputLabelProps={
                        {style:{
                                fontSize:'1.4rem',
                            }}
                    }

                />
    );
}

export default Input;