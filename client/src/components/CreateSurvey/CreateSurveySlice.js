import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const slice = createSlice({
  name: "loginInput",
  initialState: {
    question: "",
    authenticated: false,
    token: localStorage.getItem("token"),
    errors: "",
  },
  reducers: {
    save_question: (state, action) => {},
    submit_login: (state, action) => {
      state.authenticated = action.payload.authenticated;
      state.errors = action.payload.errors;
      localStorage.setItem("token", action.payload.token);
    },
  },
});

export const { submit_login } = slice.actions;

export const submitLogin = (email, password) => (dispatch) => {
  const headers = {
    "Content-Type": "application/json",
  };

  axios({
    method: "post",
    url: "/api/survey",
    headers: headers,
    data: {
      email,
      password,
    },
  })
    .then((response) => {
      dispatch(
        submit_login({ authenticated: true, token: response.data.token })
      );
    })
    .catch((error) => {
      const messages = error.response.data.errors.map((el) => {
        return el.msg;
      }, []);

      dispatch(submit_login({ errors: messages }));
    });
};

export const isAuth = (state) => state.LoginSlice.authenticated;
export const err = (state) => state.LoginSlice.errors;
export const token = (state) => state.LoginSlice.token;

export default slice.reducer;
