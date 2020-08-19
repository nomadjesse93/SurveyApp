import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const slice = createSlice({
    name: "loginInput",
    initialState: {
    authenticated: false,
        token: localStorage.getItem('token'),
        errors:'',
        name:''

    },
    reducers: {
        submit_login: (state,action) => {
            state.authenticated = action.payload.authenticated;
            state.name = action.payload.name;
            state.errors = action.payload.errors
            localStorage.setItem("token", action.payload.token)
        },
    },
});

export const { submit_login } = slice.actions;

export const submitLogin = (email, password) => (dispatch) => {
    const headers = {
        'Content-Type' : 'application/json'
    }

   axios({
       method:'post',
       url: '/api/auth',
       headers:headers,
       data:{
           email,
           password
       }
   }).then((response) => {
       dispatch(submit_login({authenticated: true, token: response.data.token, name: response.data.name}))
   }).catch((error) => {
       const messages = error.response.data.errors.map(el => {
           return el.msg;
       },[])

       dispatch(submit_login({errors: messages}))
   })
};

export const isAuth = (state) => state.LoginSlice.authenticated;
export const err = (state) => state.LoginSlice.errors;
export const token =  (state) => state.LoginSlice.token;
export const name = (state) => state.LoginSlice.name;

export default slice.reducer;
