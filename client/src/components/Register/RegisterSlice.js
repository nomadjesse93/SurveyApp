import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const slice = createSlice({
    name: "registerInput",
    initialState: {
        registered: false,
        name:''
    },
    reducers: {
        submit_info: (state,action) => {
            state.registered = action.payload;
        },
    },
});

export const { submit_info } = slice.actions;

export const submitInfo = (first_Name, last_Name, email, password) => (dispatch) => {
    const headers = {
        'Content-Type' : 'application/json',
    }

    axios({
        method:'post',
        url: '/api/users',
        headers: headers,
       data :{
            first_Name,
           last_Name,
            email,
            password
        }
    })
        .then((response) => {
                dispatch(submit_info({registered: true, name: first_Name}))
        }).catch(error => {
dispatch(submit_info(error.response.data.errors));
    })

};

export const isRegistered = (state) => state.RegisterSlice.registered;
export const firstName = (state) => state.RegisterSlice.name;
export default slice.reducer;
