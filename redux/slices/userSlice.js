import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosClient } from "../../utils/axiosSetup";

export const getMyposts = createAsyncThunk(
  "user/posts/",
  async (body, thunkAPI) => {
    try {
      // thunkAPI.dispatch(setLoader(true));
      const response = await axiosClient.post("user/getmyposts",body);
      console.log("getpost");
      return response.result.posts;
    } catch (e) {
      console.log(e);
      return Promise.reject(e);
    } finally {
      // thunkAPI.dispatch(setLoader(false));
    }
  }
);

export const getUsersposts = createAsyncThunk(
  "otheruser/posts/",
  async (body, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoader(true));
      const response = await axiosClient.post("user/getUsersPosts", body);
      console.log("getuserpost");
      return response.result.posts;
    } catch (e) {
      console.log(e);
      return Promise.reject(e);
    } finally {
      thunkAPI.dispatch(setLoader(false));
    }
  }
);

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    myPosts: [],
    usersPosts: [],
    isLoading: false,
  },
  reducers: {
    setLoader: (state, action) => {
      state.isLoading = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getMyposts.fulfilled, (state, action) => {
      // state.myPosts = action.payload.posts.reverse();
      state.myPosts = [...state.myPosts,...action.payload]
    });
    builder.addCase(getUsersposts.fulfilled, (state, action) => {
      // state.usersPosts = action.payload.posts.reverse();
      state.usersPosts = [...state.usersPosts,...action.payload];
    });
  },
});

export default userSlice.reducer;

export const { setLoader } = userSlice.actions;
