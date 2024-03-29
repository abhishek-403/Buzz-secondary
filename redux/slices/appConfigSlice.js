import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosClient } from "../../utils/axiosSetup";

export const getmyProfile = createAsyncThunk(
  "post/getUserprofile",
  async (_) => {
    try {
      const response = await axiosClient.get("/user/getmyprofile");

      return response.result;
    } catch (e) {
      console.log("profileslice", e);
      return Promise.reject(e);
    }
  }
);
export const getFeedData = createAsyncThunk(
  "/user/getmyfeed",

  async (body, thunkAPI) => {
    try {
        thunkAPI.dispatch(setLoader(true));

      const response = await axiosClient.post("/user/getmyallfeed");
      // const response = await axiosClient.post("/user/getmyfeed", body);


      console.log("myfeed",{body});
      return response.result.newData;
    } catch (e) {
      console.log("feedslice", e);
      return Promise.reject(e);
    } finally {
      thunkAPI.dispatch(setLoader(false));
    }
  }
);

const appConfigSlice = createSlice({
  name: "appConfig",
  initialState: {
    isLoading: false,
    isCommentLoading: false,
    myProfile: {},
    feedData: [],
    toastData: {},
  },
  reducers: {
    setLoader: (state, action) => {
      state.isLoading = action.payload;
    },
    setCommentLoader: (state, action) => {
      state.isCommentLoading = action.payload;
    },
    showToast: (state, action) => {
      state.toastData = action.payload;
    },
    erasemydata: (state, action) => {
      state.myProfile = [];
      state.feedData = [];
    },
   
  },
  extraReducers: (builder) => {
    builder
      .addCase(getmyProfile.fulfilled, (state, action) => {
        state.myProfile = action.payload.user;
      })
      .addCase(getFeedData.fulfilled, (state, action) => {
        state.feedData = action.payload;
       



        // state.feedData = [...state.feedData, ...action.payload];
      });
  },
});

export default appConfigSlice.reducer;
export const { setLoader, showToast,setCommentLoader,erasemydata } = appConfigSlice.actions;
