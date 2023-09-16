import { configureStore } from "@reduxjs/toolkit";
import appConfigReducer from "./slices/appConfigSlice";
import searchReducer from "./slices/searchSlice";
import userReducer from "./slices/userSlice";

export default configureStore({
  reducer: {
    appConfigReducer,
    userReducer,
    searchReducer
  },
});
