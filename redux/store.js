import { configureStore } from "@reduxjs/toolkit";
import appConfigReducer from "./slices/appConfigSlice";
import searchReducer from "./slices/searchSlice";
import userReducer from "./slices/userSlice";
import modalReducer from "./reducers/modalReducer";

export default configureStore({
  reducer: {
    appConfigReducer,
    userReducer,
    searchReducer,
    modalReducer,
  },
});
