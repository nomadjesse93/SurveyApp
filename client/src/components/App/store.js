import {configureStore} from "@reduxjs/toolkit";
import LoginSlice from '../Login/LoginSlice'
import RegisterSlice from '../Register/RegisterSlice'

export default configureStore({
    reducer:{LoginSlice, RegisterSlice}
})