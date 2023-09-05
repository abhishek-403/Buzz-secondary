import { configureStore } from "@reduxjs/toolkit";
import appConfigReducer from "./slices/appConfigSlice";
import userReducer from "./slices/userSlice";

export default configureStore({
    reducer:{
        appConfigReducer,
        userReducer,
    }
})

