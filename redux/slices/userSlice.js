import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosClient } from "../../utils/axiosSetup";

export const getMyposts = createAsyncThunk(
  "user/posts/",
  async (_) => {
    try {
      const response = await axiosClient.get("user/getmyposts");

      return response.result;
    } catch (e) {
      console.log(e);
      return Promise.reject(e);
    }
  }
);



const userSlice = createSlice({
    name: "userSlice",
    initialState: {
      myPosts:[],
    },
  
    extraReducers: (builder) => {
      builder
        .addCase(getMyposts.fulfilled, (state, action) => {
          state.myPosts = action.payload.posts.reverse();
        })
        
    },
  });
  
  export default userSlice.reducer;