import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosClient } from "../../utils/axiosSetup";

export const getmyProfile = createAsyncThunk(
  "post/getUserprofile",
  async (_) => {
    try {
      const response = await axiosClient.get("/user/getmyprofile");

      return response.result;
    } catch (e) {
      console.log(e);
      return Promise.reject(e);
    }
  }
);

export const getFeedData = createAsyncThunk(
  "/user/getmyfeed",
  
  async (_) => {

    try {
      
      const response = await axiosClient.get("/user/getmyfeed");
      // console.log("userprofile",response);

      return response.result.newData;
    } catch (e) {
      console.log(e);
      return Promise.reject(e);
    }
  }
);

const appConfigSlice = createSlice({
  name: "appConfig",
  initialState: {
    isLoading: false,
    myProfile: {},
    feedData: [],
  },
  reducers: {
    setLoader: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getmyProfile.fulfilled, (state, action) => {
        state.myProfile = action.payload.user;
      })
      .addCase(getFeedData.fulfilled, (state, action) => {
        state.feedData = action.payload.reverse();
      });
  },
});

export default appConfigSlice.reducer;
export const { setLoader } = appConfigSlice.actions;
